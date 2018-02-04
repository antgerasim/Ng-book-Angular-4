import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'price-display',
  //templateUrl: './price-display.component.html',
  template: `
    <div class="price-display">\${{price}}</div>
  `,//escape dollar sign because it is used for template variables in ES6
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {
  @Input() price: number;

  constructor() {
  }

  ngOnInit() {
  }

}
