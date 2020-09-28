import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {Product} from '../../model/product.model';
import {Observable} from 'rxjs';
import {FirebaseListObservable} from '@angular/fire/database-deprecated';
import * as firebase from 'firebase/app';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {finalize} from 'rxjs/internal/operators';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productDetails ;
  downloadURL;
   d = firebase.database();
   filePaths = [];
   disableButton:boolean = true;

   TableName= environment.tableName;
  product:Product = new Product();
  constructor(private af:AngularFireDatabase,private storage: AngularFireStorage,
              private route: ActivatedRoute,
              private router: Router,){
   }

  task: AngularFireUploadTask;
  ngOnInit() {

  }


  selectedFiles(event){
    const files = event.target.files;

    for(let f of files){
      var n = Date.now();
      const filePath = `productImages/${n}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(`productImages/${n}`, f);

      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                var seq  = this.filePaths.length;
                var obj = {
                  id:seq,
                  url: url
                }
                this.filePaths.push(obj);

                if(files.length == this.filePaths.length)
                  this.disableButton = false;
              }
            });
          })
        )
        .subscribe(url => {
          if (url) {
            console.log(url);
          }
        });
    }




  }
  save() {

    this.product.files = this.filePaths;
    this.product.seq = this.d.ref(this.TableName).push().key;
    this.d.ref(this.TableName).push(this.product)

    this.router.navigate(['/']);


  }
}
