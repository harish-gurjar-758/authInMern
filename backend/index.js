import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './db.js'

const app = express();
dotenv.config();

//  Database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log("Server is Successfully running on bilow PORT ..")
    console.log(`http://localhost:${PORT}`)
})