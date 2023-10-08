import {Router} from 'express';

export default function(store, upload) {
    const router = new Router();

    router.get('/products', async (req, res) => {
        res.json(await store.list())
    });

    router.get('/product/:id', async (req, res) => {
        res.json(await store.read(req.params.id))
    });

    router.post('/product/', async (req, res) => {
        res.json(await store.create(req.body.id));
    });


    return router;
}
