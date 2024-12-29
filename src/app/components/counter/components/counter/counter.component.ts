import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,

  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 0;
  public reset: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = this.reset;
  }
}
