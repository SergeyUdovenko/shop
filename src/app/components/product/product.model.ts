export class Product {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public avaliable?: boolean
    ) {
      this.avaliable = avaliable || true;
      this.id = id || null;
    }
  }
