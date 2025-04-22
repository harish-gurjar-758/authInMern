import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './db.js'
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();

//  Database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log("Server is Successfully running on bilow PORT ..")
    console.log(`http://localhost:${PORT}`)
})