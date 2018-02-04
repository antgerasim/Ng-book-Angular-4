import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';// it let us set attributes on the host element. The host is the element this component is attached to.
  constructor() { }

  ngOnInit() {
  }

}
