import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import messageRoutes from './routes/messageRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.error(err));

app.use('/messages', messageRoutes);

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// Catch all other routes and return the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
