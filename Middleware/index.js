// index.js
import express from 'express';

const app = express();
const PORT = 3000;

// ✅ 1. Application-level Middleware: Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // pass to next middleware or route
});

// ✅ 2. Middleware: JSON parser (built-in)
app.use(express.json());

// ✅ 3. Custom Middleware: Block access to a specific path
app.use('/secret', (req, res, next) => {
  const isAllowed = true; // fake condition
  if (!isAllowed) {
    return res.status(403).send('🚫 Access denied to /secret');
  }
  else{
    app.get('/secret', (req, res) => {
      res.send('🔐 Welcome to the secret area!');
    });
  }
  next();
});

// ✅ 4. Route Handler (final destination)
app.get('/', (req, res) => {
  res.send('👋 Hello from the Captain\'s ship!');
});

app.get('/about', (req, res) => {
  res.send('📘 This is an Express server with middleware.');
});

// ✅ 5. Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('🔥 Error caught:', err.stack);
  res.status(500).send('Something broke on the ship!');
});

// ✅ 6. Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is sailing on http://localhost:${PORT}`);
});
