import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ProductComponent } from './app/product/product.component';
import { ContactComponent } from './app/contact/contact.component'; // Import de ContactComponent

const routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'contact', component: ContactComponent } // Route pour la page Contact
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});