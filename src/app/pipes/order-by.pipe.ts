import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(products: any, args?: any): any {
    const sortBy = args;
    if (sortBy) {
      return products.sort();
    } else {
      return products.sort().reverse();
    }
  }

}
