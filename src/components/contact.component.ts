import {Component} from 'angular2/core';
import {ContactService} from '../services/contact.service';

@Component({
  template: require('./contact.html'),
  providers: [ContactService]
})
export class ContactComponent {
  contactDetails: any;

  constructor(private _contactService: ContactService) { }

  contact() {
    this.contactDetails = this._contactService.details();
  }

  ngOnInit() {
    console.log('ngOnInit(): ContactComponent');
    this.contact();
  }
}
