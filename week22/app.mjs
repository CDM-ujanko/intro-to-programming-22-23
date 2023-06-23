import express from 'express';
import { engine } from 'express-handlebars';
import adminRouter from './routes/admin.mjs';
const app = express();

app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  res.render('index', {query: req.query, time: new Date()});
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/product/:id', (req, res) => {
  res.json(req.params)
});


app.get('/request', (req, res) => {
  if (req.query.name === 'boban') {
    res.send('Desi bobane!');
    return;
  }
  res.json({
    path: req.path,
    params: req.params,
    query: req.query
  })
})


app.listen(3000, () => {
  console.log('App listening on port 3000');
});

