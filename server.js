import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 10000;

console.log('Starting server...');
console.log('__dirname:', __dirname);

// Priority 1: Serve static assets (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'dist'), {
  index: false // Don't serve index.html automatically
}));

// Priority 2: Catch all other routes and serve index.html
app.get('*', (req, res) => {
  console.log(`Serving ${req.url} -> index.html`);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Server Error');
    }
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${port}`);
});