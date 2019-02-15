import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Input } from '@angular/core'

@Component({
  selector: 'app-hero-child',
  template: `<h3>{{hero.name}} says:</h3>
  <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `,
  
})
export class HeroChildComponent{
  @Input() hero: Hero;
  @Input('master') masterName: string;

}
