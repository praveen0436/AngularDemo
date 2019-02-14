import { Component } from '@angular/core';
import { Hero} from './hero'

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <app-little-tour></app-little-tour>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>

  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
    </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes!</p>
`
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Praveen'),
    new Hero(2, 'Jyoti'),
    new Hero(3, 'Kavita'),
    new Hero(4, 'Akhil')
  ];
  myHero = this.heroes[0];
}