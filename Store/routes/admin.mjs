import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('this is the admin home page!');
});

router.get('/test', (req, res) => {
  res.render('admin');
});

export default router;