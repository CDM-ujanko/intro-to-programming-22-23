import 'dotenv/config'

import express from 'express';
import {engine} from 'express-handlebars';
import multer from 'multer';
import * as path from 'path';
// Routes
import useProductRouter from './routes/product.mjs';
import useApiRouter from './routes/api.mjs';

// import {MemoryProductStore} from './models/MemoryProductStore.mjs';
// import {FSProductStore} from './models/FSProductStore.mjs';
import {SqliteProductStore} from './models/SqliteProductStore.mjs';

// Create new app
const app = express();
// Create a new instance of the data store.
const store = new SqliteProductStore();

// Create new storage on the disk for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage});

// Register public directory (use fro thing like main.css)
app.use(express.static('public'));
// redirect all /image/213.jpg => /upload/213.jsg
app.use('/images/', express.static('upload'));

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Pass store and upload to the router.
app.use('/product', useProductRouter(store, upload));
app.use('/api', useApiRouter(store, upload));

//Homepage
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