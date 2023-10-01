import {Router} from 'express';

function useProductRouter(store, upload) {
    const router = new Router();

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

    router.post('/:id',  upload.single('preview'), async (req, res) => {
        let product = req.body;
        console.log('PRODUCT BODY!', product);
        product.id = parseInt(req.params.id);
        await store.update(product);
        res.redirect(`/product/${product.id}`);
    })

    router.get('/delete/:id', async (req, res) => {
        await store.delete(req.params.id);
        res.redirect(`/`);
    });

    return router;
}

export default useProductRouter;