import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  responceResult: any ;

  getItem(Item: string) {
    const responce = localStorage.getItem(Item);
    this.responceResult = JSON.parse(responce);
    return this.responceResult;
  }

  removeItem(Item) {
    localStorage.removeItem(Item);
  }

  setItem(Data, Item) {
    const data = JSON.stringify(Data);
    localStorage.setItem(Item, data );
  }
  constructor() { }

}
