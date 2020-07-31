import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // declare name as string in TypeScript
  name:string = '';

  // constructor for the class
  constructor() {
    this.changeName('there!');
  }

  // method to change this.name in TypeScript
  changeName(name:string):void {
    this.name = name;
  }
}
