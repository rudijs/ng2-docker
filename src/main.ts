import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import 'angular2/bundles/angular2-polyfills.js';
import {bootstrap} from 'angular2/platform/browser';
// import {ROUTER_PROVIDERS} from 'angular2/router';

import {enableProdMode} from 'angular2/core';
declare let PRODUCTION: any;
if (PRODUCTION) {
  enableProdMode();
}

import {AppComponent} from './app.component';

// bootstrap(AppComponent, [ROUTER_PROVIDERS]);
bootstrap(AppComponent);
