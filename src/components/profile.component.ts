import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
// import 'rxjs/add/operator/map';

@Component({
  template: require('./profile.html'),
  providers: [HTTP_PROVIDERS]
})
export class ProfileComponent {
    ngOnInit() {
    console.log('ngOnInit(): ProfileComponent');
  }

  url: string = 'https://api.github.com/users/rudijs';
  profile: any;
  profileKeys: any;

  constructor(http: Http) {

    http.get(this.url)
      // Call map on the response observable to get the parsed profile object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed profile object and attach it to the
      // component
      .subscribe(profile => {
        this.profile = profile;
        this.profileKeys = Object.keys(this.profile);
      });
  }
}
