import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  template:`
  <input (keyup)="onKey($event)">
  <p>{{values}}</p>
`
})
export class KeyUpComponent {
  values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
}

