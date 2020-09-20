import { Component, OnInit } from '@angular/core';
 import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  path = "https://drive.google.com/uc?id=";
  productId;
  customOptions: OwlOptions;
  whatsappApi= "https://wa.me/919000748372?text=";
  productDetails : Observable<any[]>;
  constructor(private af:AngularFireDatabase,
              private route: ActivatedRoute,
              private router: Router,){

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params["id"]) {
        this.productId = params["id"]
        this.getProductDetails();
      }
    })

  this.customOptions  = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }
  }

  getProductDetails(){

    // DatabaseReference ref = FirebaseDatabase.getInstance().getReference("recent");
    // Query query = ref.orderByChild("members/0").equalTo("5");

    this.productDetails = this.af.list('products',ref=>ref.orderByChild('seq').equalTo(parseInt(this.productId))).valueChanges();

  }
}
