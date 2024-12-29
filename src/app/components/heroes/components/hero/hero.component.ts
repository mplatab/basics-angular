import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capilaizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): String {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 25;
  }

  resetForm():void {
    this.name = 'iroman';
    this.age = 45;
  }




}
