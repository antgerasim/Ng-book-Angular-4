import {Component, HostBinding, OnInit, Input} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  /*In Angular, a component host is the element this component is attached to. Set properties on the host element by using @Hostbinding() decorator. In this case, we’re asking Angular to
   keep the value of the host elements class to be in sync with the property cssClass.*/
  @HostBinding('attr.class') cssClass = 'row';// the css class we want to apply to the ''host' of this component. This 'Encapsulates' the component with a concerte class
  @Input() article: Article;


  constructor() {
    //this.article = new Article('Angular 2','http://angular.io',10);
    //articlel is now populated by the input row
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false; //ensure the browser wont try to refresh the page (prevents event propagation)
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
