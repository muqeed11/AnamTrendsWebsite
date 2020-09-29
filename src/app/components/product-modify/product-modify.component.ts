import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.scss']
})
export class ProductModifyComponent implements OnInit {
  items: Observable<any[]>;
  TableName= environment.tableName;
  constructor(private af:AngularFireDatabase,
              private route: ActivatedRoute,
              private router: Router,){

  }

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
