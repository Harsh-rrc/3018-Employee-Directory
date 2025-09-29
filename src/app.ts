import express from 'express';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(morgan('combined'));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is healthy',
    timestamp: new Date().toISOString()
  });
});

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ 
    message: 'Employee Directory and Branch Management API',
    version: '1.0.0'
  });
});

export default app;