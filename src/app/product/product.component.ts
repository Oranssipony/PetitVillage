import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductsService } from '../products.service';

@Component({
  standalone: true,
  selector: 'app-product',
  templateUrl: './product.component.html',
  providers: [ProductsService],
  imports: [CommonModule, CurrencyPipe]
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product = this.productsService.getProductById(productId);
    }
  }
}