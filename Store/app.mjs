import express from 'express';
import { engine } from 'express-handlebars';
const app = express();
import { MemoryProductStore } from './models/MemoryProductStore.mjs';

app.use(express.static('public'));
app.use(express.json())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const store = new MemoryProductStore();

app.get('/', (req, res) => {
  res.render('index', { products: store.list() });
});

app.post('/product', (req, res) => {
  res.json(store.create(req.body));
})

app.get('/product/:id', (req, res) => {
  res.render('product', { product: store.read(req.params.id)})
});

app.put('/product/:id', (req, res) => {
  let product = req.body;
  product.id = req.params.id;
  res.json(store.update(product));
})


app.delete('/product/:id', (req, res) => {
  console.log('Endpoint hit!', req.params.id);
  res.json(store.delete(req.params.id))
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

