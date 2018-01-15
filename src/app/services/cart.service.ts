import { Injectable } from '@angular/core';

export class CartItem {
    constructor(
        public name: string,
        public cost: number,
        public count: number
    ) {
        this.count = count || 1;
    }
}

@Injectable()
export class CartService {
    getCartItems(): Array<CartItem> {
        return [
            new CartItem('Demo Product', 15, 2),
            new CartItem('Demo Product1', 16, 1),
            new CartItem('Demo Product2', 18, 1),
            new CartItem('Demo Product3', 155, 2),
        ];
    }
    constructor() { }

}
