import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './db.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

const app = express();

// Load environment variables
dotenv.config();

// Connect to the database
connection();
 
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log('✅ Server is running on:');
    console.log(`➡️ http://localhost:${PORT}`);
});
