import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {HomeComponent} from './components/home.component';
import {ContactComponent} from './components/contact.component';
import {LoginComponent} from './components/login.component';
import {ProfileComponent} from './components/profile.component';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComponent
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileComponent
  }
])
export class AppComponent {
  ngOnInit() {
    console.log('ngOnInit(): AppComponent');
  }
}
