import { Component, inject } from '@angular/core';
//import { CarService } from './car.service';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { LowerCasePipe } from '@angular/common';
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
//import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework:</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class User {
  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {}
}



@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <input type="text" formControlName="name" />
      <input type="email" formControlName="email" />
      <button type="submit">Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
  imports: [ReactiveFormsModule],
})
export class App {
//   profileForm = new FormGroup({
//     name: new FormControl(''),
//     email: new FormControl(''),
//   });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐️ ');
  username = 'yOunGTECh';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
  word = 'You are a champion';
}



@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm">
      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class AppComponent1 {
  word = 'Angular';
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}


@Component({
  selector: 'app-root',
  template: ` <p>Car Listing: {{ display }}</p> `,
})


@Component({
  selector: 'app-root',
  template: ` {{ username | lowercase }} `,
  imports: [LowerCasePipe],
})




@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number: '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date: 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})


@Component({
  selector: 'app-root',
  template: ` Reverse Machine: {{ word | reverse }} `,
//   imports: [ReversePipe],
})
export class AppComponent {
  word = 'Angular';
}