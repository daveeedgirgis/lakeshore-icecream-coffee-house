import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (JS, CSS, images) but not HTML files
app.use('/assets', express.static(path.join(__dirname, 'dist', 'assets')));
app.use('/images', express.static(path.join(__dirname, 'dist', 'images')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  console.log(`Request for: ${req.url}`);
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  
  // Check if index.html exists
  if (fs.existsSync(indexPath)) {
    console.log(`Serving index.html from: ${indexPath}`);
    res.sendFile(indexPath);
  } else {
    console.log(`index.html not found at: ${indexPath}`);
    res.status(404).send('index.html not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`__dirname: ${__dirname}`);
  console.log(`dist path: ${path.join(__dirname, 'dist')}`);
  
  // Check if dist directory exists
  const distPath = path.join(__dirname, 'dist');
  console.log(`dist directory exists: ${fs.existsSync(distPath)}`);
  
  if (fs.existsSync(distPath)) {
    console.log(`dist contents:`, fs.readdirSync(distPath));
  }
});