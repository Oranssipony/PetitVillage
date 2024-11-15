import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true  // Ajout de standalone: true
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], order: string = 'asc'): any[] {
    return products.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
  }
}