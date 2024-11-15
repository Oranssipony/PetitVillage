import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    { id: '1', name: 'Figurine Astérix', description: 'Figurine du célèbre Gaulois', price: 20, imageUrl: 'assets/images/asterix.jpeg' },
    { id: '2', name: 'Figurine Obélix', description: 'Figurine du fidèle Obélix', price: 25, imageUrl: 'assets/images/Obelix.jpg' },
    { id: '3', name: 'Agecanonix', description: 'Le doyen du village', price: 15, imageUrl: 'assets/images/agecanonix.webp' },
    { id: '4', name: 'Astérix et Obélix en légionnaires', description: 'Les deux gaulois déguisés en légionnaires romains', price: 35, imageUrl: 'assets/images/asterix-et-obelix-en-legionnaires.jpg' },
    { id: '5', name: 'Centurion', description: 'Le centurion romain toujours en difficulté', price: 18, imageUrl: 'assets/images/centurion.jpg' },
    { id: '6', name: 'César', description: 'Le célèbre empereur romain', price: 30, imageUrl: 'assets/images/cesar.jpg' },
    { id: '7', name: 'Falbala', description: 'La jolie Falbala', price: 22, imageUrl: 'assets/images/falbala.jpg' },
    { id: '8', name: 'Idéfix', description: 'Le fidèle chien d\'Obélix', price: 12, imageUrl: 'assets/images/idefix.jpg' },
    { id: '9', name: 'Panoramix', description: 'Le druide du village', price: 20, imageUrl: 'assets/images/panoramix.jpg' },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}