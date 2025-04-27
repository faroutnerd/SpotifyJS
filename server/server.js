import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import songRouter from './src/routes/song.route.js';
import {connectDB} from './src/config/db.js';
import connectCloudinary from './src/config/cloudinary.js';

// app config
const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// initialize routes
app.use('/api/song', songRouter);

app.get('/', (req, res) => {
    res.send('API is running...');
});

// start server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})