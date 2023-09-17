import 'dotenv/config'

import express from 'express';
import {engine} from 'express-handlebars';
import productRouter from './routes/product.mjs';

const app = express();
// import {MemoryProductStore} from './models/MemoryProductStore.mjs';
import {FSProductStore} from './models/FSProductStore.mjs';

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const store = new FSProductStore();

app.use('/product', productRouter);

app.get('/', async (req, res) => {
    res.render('index', {products: await store.list()});
});

app.get('*', (req, res) => {
    res.status(404);
    res.render('error', {code: 404, message: 'Could not find the page you are looking for.'});
})

app.use((err, req, res, next) => {
    res.status(500);
    res.render('error', { code: 500, message: err});
});

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});