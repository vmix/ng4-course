import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `      <h1>Single Car</h1>      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, minima.</p>    `,
  styles: [`      h1 {
    color: brown;
  }    `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
