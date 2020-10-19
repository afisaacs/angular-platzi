import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';
  input = '';
  array = ['🍎', '🍏', '🍇', '🍌', '🍑'];
  power = 10;

  constructor() {}

  ngOnInit(): void {}

  addItem(): void {
    this.array.push(this.title);
  }

  deleteItem(index: number): void {
    this.array.splice(index, 1);
  }
}
