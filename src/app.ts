import express from 'express';
import morgan from 'morgan';
import employee from './api/v1/routes/employeeRoutes';
import branch from './api/v1/routes/branchesRoutes';


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


// API Routes
app.use('/api/v1/employees', employee);
app.use('/api/v1/branches', branch);

export default app;