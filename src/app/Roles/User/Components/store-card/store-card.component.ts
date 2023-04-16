import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel/product-model';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css']
})
export class StoreCardComponent {
  @Input() p!: ProductModel|any;

}
