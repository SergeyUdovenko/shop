import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {

  private channel = new Subject<string>();

  public channel$ = this.channel.asObservable();

  publishData(data: string) {
    this.channel.next(data);
  }
  constructor() { }

}
