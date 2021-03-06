import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  id: string;
  productForm: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.id = params.id;
        this.loadProduct();
      }
    });
  }

  uploadFile(event): void {
    const file = event.target.files[0];
    console.log(file);
    const dir = `images/products/${file.name}`;
    const fileRef = this.angularFireStorage.ref(dir);
    const task = this.angularFireStorage.upload(dir, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe((url) =>
            this.productForm.get('image').setValue(url)
          );
        })
      )
      .subscribe();
  }

  submit(): void {
    if (!this.productForm.valid) {
      console.log('Digite correctamente el formulario');
      return;
    }
    const product = this.productForm.value;
    if (this.id) {
      this.productService
        .updateProduct(this.id, product)
        .subscribe((updateProduct) => {
          console.log(updateProduct);
          this.router.navigate(['./admin/products']);
        });
    } else {
      this.productService.createProduct(product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get priceFiled(): AbstractControl {
    return this.productForm.get('price');
  }

  private loadProduct(): void {
    this.productService.getProduct(this.id).subscribe((product) => {
      this.productForm.patchValue(product);
    });
  }

  private buildForm(): void {
    this.productForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isValidPrice]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }
}
