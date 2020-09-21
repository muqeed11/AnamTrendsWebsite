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

  pr =
    {
      "brand" : "PEARL DAISY",
      "desc" : "Top  HEAVY FOX GEORGETT FRONT AND BACK EMBROIDERY WORK AND HAND PEARL WORK Bottom -  HEAVY ANTOON WITH HEAVY EMBROIDERY PATCHWORK  INNER - HEAVY SANTOON DUPATTA: -HEAVY NAZNEEN WITH EMBROIDERY WORK ",
      "files" :
        [{
          "id":"1",
          "url":"https://firebasestorage.googleapis.com/v0/b/anamtrends-d56c9.appspot.com/o/0.jpg?alt=media&token=91e763fe-8a9c-4c7f-8a1d-5fe3dfdfc4a2",
        },


        ],
       "price" : "1399",
      "seq" : 0,
      "type" : "Stiched"
    };




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
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        1: {
          items: 1
        },

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
