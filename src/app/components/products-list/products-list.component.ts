import { Component, OnInit } from '@angular/core';
 import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  items: Observable<any[]>;
  path = "https://drive.google.com/uc?id=";
  constructor(private af:AngularFireDatabase,
              private route: ActivatedRoute,
              private router: Router,){

  }

  ngOnInit() {
    this.getProducts()
  }
  getProducts() {
    this.items = this.af.list('products').valueChanges();

  }
}
