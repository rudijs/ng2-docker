import {Component} from 'angular2/core';

@Component({
  template: require('./home.html')
})
export class HomeComponent {
  ngOnInit() {
    console.log('ngOnInit(): HomeComponent');
  }
}
