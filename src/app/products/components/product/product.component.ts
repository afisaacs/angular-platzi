import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicker: EventEmitter<any> = new EventEmitter();
  today = new Date();

  constructor() {
    console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   // Add '${implements OnChanges}' to the class.
  //   console.log('2. ngOnChanges', changes);
  // }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    console.log('3. ngOnInit');
  }

  ngDoCheck(): void {
    // Called every time that the input properties of a component or a directive are checked.
    // Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    console.log('4. ngDoCheck');
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy');
  }

  addCart(): void {
    console.log('Agregar al carrito');
    this.productClicker.emit(this.product.id);
  }
}
