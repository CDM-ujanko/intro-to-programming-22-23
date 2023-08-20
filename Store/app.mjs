import express from 'express';
import {engine} from 'express-handlebars';

const app = express();
import {MemoryProductStore} from './models/MemoryProductStore.mjs';

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const store = new MemoryProductStore();

app.get('/', (req, res) => {
    res.render('index', {products: store.list()});
});

app.get('/product/create', (req, res) => {
    res.render('product-edit', {});
});

app.post('/product', (req, res) => {
    // res.json(store.create(req.body));
    let product = store.create(req.body);
    res.redirect(`/product/${product.id}`);
})

app.get('/product/:id', (req, res) => {
    res.render('product', {product: store.read(req.params.id)})
});

app.get('/product/edit/:id', (req, res) => {
    res.render('product-edit', {product: store.read(req.params.id)})
});

app.post('/product/:id', (req, res) => {
    let product = req.body;
    product.id = parseInt(req.params.id);
    store.update(product);
    res.redirect(`/product/${product.id}`);
})

app.delete('/product/:id', (req, res) => {
    console.log('Endpoint hit!', req.params.id);
    res.json(store.delete(req.params.id))
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});

