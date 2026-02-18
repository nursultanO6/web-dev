import { Component } from '@angular/core';
//import { User } from './user/user';
//import { Home } from './home/home';
@Component({
  selector: 'app-user',
  template: ` Username: {{ username }} `,
})
export class AppComponent1 {
  word = 'Angular';
}
// export class User {
//   username = 'youngTech';
// }

@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-user />
    </section>
  `,
  //imports: [User],
})
export class AppComponent2 {
  word = 'Angular';
}


import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})
export class User {
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}


import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    //component: Home,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: User,
  },
];



import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet, RouterLink],
})
export class App {}

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
  `,
  imports: [FormsModule],
})
export class AppComponent {
  word = 'Angular';
}
// export class User {
//   favoriteFramework = '';
//   username = 'youngTech';
// }