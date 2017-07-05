/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Log Analyzer UI';
  public url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState, public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  public isHomeActive(): boolean {
    if (this.route.snapshot.url[0]) {
      console.log('Actual route URL ' + this.route.snapshot.url[0]);
      return this.route.snapshot.url[0].toString() === './home';
    } else {
      return false;
    }
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
