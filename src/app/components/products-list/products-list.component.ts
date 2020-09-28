import { Component, OnInit } from '@angular/core';
 import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

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
  TableName= environment.tableName;
  ngOnInit() {
    this.getProducts()
  }
  getProducts() {
    this.items = this.af.list(this.TableName).valueChanges();

    this.items.subscribe(s=>{
      console.log(s)
    })

  }
}
