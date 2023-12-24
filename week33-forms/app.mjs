
import express from 'express';
import {engine} from 'express-handlebars';


// Create new app
const app = express();

// Register public directory (use fro thing like main.css)
app.use(express.static('public'));


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


//Homepage
app.get('/', async (req, res) => {
    res.render('index');
});

app.post('/api/form-post', (req, res) => {
   console.log(req.body);
   res.redirect('/')
});


app.listen(3000, () => {
    console.log(`App listening on port 3000`);
});