 import { Routes, RouterModule } from '@angular/router';
 import {ProductDetailsComponent} from './components/product-details/product-details.component';
 import {ProductsListComponent} from './components/products-list/products-list.component';
 import {ProductAddComponent} from './components/product-add/product-add.component';


export const routesConfig: Routes = [
  // { path: '', component: AppComponent},
  {
    path: '',
    component: ProductsListComponent,

  },
{
    path: 'product/:id',
    component: ProductDetailsComponent,

  },
  {
    path: 'product-add',
    component: ProductAddComponent,

  },

];


