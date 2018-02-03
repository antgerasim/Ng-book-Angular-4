import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hello-world',
  template:`<p>
    hello-world works inline!
  </p>`,
  //templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']// array because you can load multiple stylesheets for a single component
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
