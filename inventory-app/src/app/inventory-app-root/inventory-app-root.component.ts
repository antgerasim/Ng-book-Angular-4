import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-app-root',
  //templateUrl: './inventory-app-root.component.html',
  template:`<div class="inventory-app">
    (Products will go here soon)
  </div>`,
  styleUrls: ['./inventory-app-root.component.css']
})

//the component controller is defined by a class,
export class InventoryAppRootComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
