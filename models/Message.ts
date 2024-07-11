import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
});

const Message = model('Message', messageSchema);

export default Message;
