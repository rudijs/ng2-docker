import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
  template: require('./hero.html')
})
export class HeroComponent {
  ngOnInit() {
    console.log('ngOnInit(): HeroComponent');
  }
  public title = 'Tour of Heroes';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}
