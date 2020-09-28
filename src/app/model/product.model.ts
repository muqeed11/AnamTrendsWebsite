import {ArrayType} from '@angular/compiler';

export  class Product {

  brand:string;
  desc:string;
  files:Files[] = [];
  price:string;
  seq:string;
  type:string;
}

export class  Files {
  id:string;
  url:string;
}
