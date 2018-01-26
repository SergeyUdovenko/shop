import { Injectable, Version } from '@angular/core';

@Injectable()
export class ConstantsService {
  Constants = {
    App: 'Shop',
    Version: '0.1.0',
    Owner: 'Anonymos'
  };
  getData() {
    const Constants = {
      App: 'Shop',
      Version: '0.1.0',
      Owner: 'Anonymos'
    };
    return Constants;
  }
  constructor() { }

}
