import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'product-image',
  //templateUrl: './product-image.component.html',
  template:`<img [src]="product.imageUrl" class="product-image">`,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { }

  ngOnInit() {
  }

}

/*
The one thing to note here is in the img tag, notice how we use the [src] input to img.
 By using the [src] attribute, we’re telling Angular that we want to use the [src] input on this img
 tag. Angular will then replace the value of the src attribute once the expression is resolved.
 We could also have written this tag this way:
 1 <img src="{{ product.imageUrl }}">
 Both styles do essentially the same thing, so feel free to pick the style that works best for your team.
 p134
  */
