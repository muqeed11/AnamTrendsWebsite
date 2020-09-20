import { Component } from '@angular/core';
 import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Anam Trends';

  products;
  constructor(private af:AngularFireDatabase,
              private route: ActivatedRoute,
              private router: Router,){
    const navEndEvents = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );

  }
  ngOnInit() {
    // Scroll to top on route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      if(evt instanceof NavigationEnd){
          window.scrollTo(0, 0);
      }
      // window.scrollTo(0, 0);

    });

  }


}
