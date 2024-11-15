import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsService, Product } from '../products.service';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FilterByNamePipe } from '../filter-by-name.pipe';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductsService],
  imports: [CommonModule, FormsModule, RouterModule, SortByPricePipe, FilterByNamePipe]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];  // Typage correct de 'products' avec 'Product[]'
  searchText = '';
  sortOrder = 'asc';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}