import express from 'express';
import { engine } from 'express-handlebars';
const app = express();
import { MemoryProductStore } from './models/MemoryProductStore.mjs';

app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const store = new MemoryProductStore();

app.get('/', (req, res) => {
  res.render('index', { products: store.list() });
});

app.get('/product/:id', (req, res) => {
  res.render('product', { product: store.read(req.params.id)})
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

