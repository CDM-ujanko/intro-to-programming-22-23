import {Router} from 'express';
import {MemoryProductStore} from '../models/MemoryProductStore.mjs';
// import {FSProductStore} from '../models/FSProductStore.mjs';

const router = new Router();
const store = new MemoryProductStore();

router.get('/', (req, res) => {
    res.render('product-edit', {});
});

router.get('/:id', async (req, res) => {
    res.render('product', {product: await store.read(req.params.id)})
});

router.get('/edit/:id', async (req, res) => {
    res.render('product-edit', {product: await store.read(req.params.id)})
});

router.post('/', async (req, res) => {
    let product = await store.create(req.body);
    res.redirect(`/product/${product.id}`);
})

router.post('/:id', async (req, res) => {
    let product = req.body;
    product.id = parseInt(req.params.id);
    await store.update(product);
    res.redirect(`/product/${product.id}`);
})

router.delete('/:id', async (req, res) => {
    res.json(await store.delete(req.params.id))
});

export default router;