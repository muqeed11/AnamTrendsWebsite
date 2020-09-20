import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 import { AppComponent } from './app.component';
 import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {RouterModule} from '@angular/router';
 import {routesConfig} from './app-routing.module';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule.forRoot(routesConfig,{useHash:false})

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
