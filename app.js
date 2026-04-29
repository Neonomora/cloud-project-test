const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/hello', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Hello from API Server!',
    server: 'API Server (Express)',
    subnet: 'private-1a · 10.0.5.0/24',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
});
