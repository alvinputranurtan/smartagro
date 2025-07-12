const express = require('express');
const next = require('next');
const path = require('path');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev, dir: './frontend' }); // ⬅️ arahkan ke folder frontend
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // API routes dari backend
  const apiRoutes = require('./backend/routes/api'); // misalnya
  server.use('/api', apiRoutes);

  // Serve frontend
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
