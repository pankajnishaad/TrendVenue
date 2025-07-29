import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js'; // ✅ Import at top
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter)

app.get('/', (req, res) => res.send("API Working..."));

// Start Server
app.listen(port, () => console.log('Server started on port: ' + port));
