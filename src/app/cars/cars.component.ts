import { Component } from '@angular/core';
import {setTimeout} from 'timers';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent {
  addCarStatus = '';

  constructor() {
  }

  addCar() {
    this.addCarStatus = 'The car is added';
  }
}

