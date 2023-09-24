import {Router} from 'express';
import multer from 'multer';
import * as path from 'path';
// import {MemoryProductStore} from '../models/MemoryProductStore.mjs';
import {FSProductStore} from '../models/FSProductStore.mjs';

const router = new Router();
const store = new FSProductStore();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage});

router.get('/', (req, res) => {
    res.render('product-edit', {});
});

router.get('/:id', async (req, res) => {
    res.render('product', {product: await store.read(req.params.id)})
});

router.get('/edit/:id', async (req, res) => {
    res.render('product-edit', {product: await store.read(req.params.id)})
});

router.post('/', upload.single('preview'), async (req, res) => {
    console.log(req.file);
    let p = req.body;
    if (req.file) {
        p.preview = '/images/' + req.file.filename;
    }
    let product = await store.create(p);
    res.redirect(`/product/${product.id}`);
})

router.post('/:id', async (req, res) => {
    let product = req.body;
    product.id = parseInt(req.params.id);
    await store.update(product);
    res.redirect(`/product/${product.id}`);
})

router.get('/delete/:id', async (req, res) => {
    await store.delete(req.params.id);
    res.redirect(`/`);
});

export default router;