let data = [
    {
        "id": 0,
        "name": "Mouse",
        "price": 15,
        "description": "A nice Logitech mouse",
        "previewImage": "http://placehold.it/32x32",
        "images": []
    },
    {
        "id": 1,
        "name": "Keyboard",
        "price": 125,
        "description": "Nascetur fermentum fringilla enim sapien tincidunt torquent est vitae feugiat blandit sit senectus massa suscipit mi justo metus aenean mus accumsan quisque vehicula convallis integer cursus felis amet orci dui ridiculus litora aliquam iaculis maximus laoreet finibus gravida erat habitasse consequat viverra ornare ultrices nulla nostra nibh porttitor lorem elementum nam ligula at aptent duis aliquet cras sodales vestibulum ullamcorper cubilia ultricies donec lobortis lacinia primis libero dictum mauris hendrerit pharetra tortor euismod dapibus vivamus risus tempus rhoncus semper dis montes quam praesent vulputate ad condimentum ac volutpat venenatis odio eleifend sagittis arcu augue inceptos egestas adipiscing tempor sociosqu morbi",
        "previewImage": "http://placehold.it/32x32",
        "images": []
    },
    {
        "id": 2,
        "name": "Glass",
        "price": 17,
        "description": "Nascetur fermentum fringilla enim sapien tincidunt torquent est vitae feugiat blandit sit senectus massa suscipit mi justo metus aenean mus accumsan quisque vehicula convallis integer cursus felis amet orci dui ridiculus litora aliquam iaculis maximus laoreet finibus gravida",
        "previewImage": "http://placehold.it/32x32",
        "images": []
    }
];

export class MemoryProductStore {
    _products;
    constructor() {
        this._products = data;
    }

    read(id) {
        let product = this._products.find(p => p.id === parseInt(id));
        if (!product) {
            throw new Error('No product with such id.');
        }

        return product;
    }

    list() {
        return this._products;
    }
}