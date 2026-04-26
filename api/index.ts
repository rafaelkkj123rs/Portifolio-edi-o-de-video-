import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(process.cwd(), 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(process.cwd(), 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Stock | Video Editor & Motion Design' });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { title: 'Portfolio | Stock' });
});

app.get('/profile', (req, res) => {
  res.render('profile', { title: 'Profile | Stock' });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
