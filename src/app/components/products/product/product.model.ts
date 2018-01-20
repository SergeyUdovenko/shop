enum Category {
    Popular = 'Most popular',
    Rated = 'Top Rated',
    New = 'Newest'
}

export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public count: number,
        public avaliable?: boolean,
        public category?: Category,
        public totalPrice?: number
    ) {
        this.avaliable = avaliable || true;
        this.id = id || null;
        this.category = category || Category.New;
        this.count = count || 1;
        this.totalPrice = this.count * this.price;
    }
}
