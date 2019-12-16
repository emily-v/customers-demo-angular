import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // this is the tag that will be called in the html
  template: `<router-outlet></router-outlet>`
  //`<app-customers></app-customers>` // app.component.html is not rendered b/c url not provided here
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title: string;
  constructor() {}

  ngOnInit() {
    // Here we would call a service that gets the data instead of hard-coding in class
    //this.title = 'Angular Tutorial Project';
  }
}
