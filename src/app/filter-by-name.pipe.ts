import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: true  // Ajout de standalone: true
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: any[], searchText: string): any[] {
    if (!searchText) return products;
    return products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
  }
}