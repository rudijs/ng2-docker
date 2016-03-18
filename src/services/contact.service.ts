import {Injectable} from 'angular2/core';

interface ContactDetails {
  name: string;
  email: string;
  url: string;
}

@Injectable()
export class ContactService {

  details(): ContactDetails {
    return {
      name: 'Rudi Starcevic',
      email: 'ooly.me@gmail.com',
      url: 'https://github.com/rudijs'
    };
  }

}
