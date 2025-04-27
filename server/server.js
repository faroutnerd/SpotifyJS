import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';

// app config
const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// initialize routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// start server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})