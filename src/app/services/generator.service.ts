import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
  stringGenerate(num) {
    let result = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < num; i++) {
      result += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    console.log(result);
    return result;
  }
  constructor() { }

}
