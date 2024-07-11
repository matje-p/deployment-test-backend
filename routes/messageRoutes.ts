import { Router } from 'express';
import Message from '../models/Message';

const router = Router();

router.post('/', async (req, res) => {
  const { content } = req.body;
  const newMessage = new Message({ content });
  try {
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    // res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (err) {
    // res.status(500).json({ message: err.message });
  }
});

export default router;
