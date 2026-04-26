import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Stock | Video Editor & Motion Design' });
});

router.get('/portfolio', (req, res) => {
  res.render('portfolio', { title: 'Portfolio | Stock' });
});

router.get('/profile', (req, res) => {
  res.render('profile', { title: 'Profile | Stock' });
});

export default router;
