import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { map, switchMap, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

import { LocalStorageService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private sub: Subscription;
  loginChecker: boolean;
  title = 'app';
  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  constructor(
    private router: Router,
    private metaService: Meta,
    private titleService: Title,
    private lockalStor: LocalStorageService
  ) { }

  ngOnInit() {
    this.setPageTitlesAndMeta();
    if (this.lockalStor.getItem('config')) {
      this.loginChecker = true;
      console.log(`You are currently logged in`);
    } else {
      this.loginChecker = false;
      console.log(`You are currently not logged in`);
    }
  }

  private setPageTitlesAndMeta() {
    this.sub = this.router.events
      .pipe(

      filter(event => event instanceof NavigationEnd),
      map(() => this.router.routerState.root),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      switchMap(route => route.data)
      )
      .subscribe(

      data => {
        this.titleService.setTitle(data['title']);
        this.metaService.addTags(data['meta']);
      }

      );
  }

  onActivate($event) {
    console.log('Activated Component', $event);
  }
  onDeactivate($event) {
    console.log('Deactivated Component', $event);
  }

}
