"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Message_1 = __importDefault(require("../models/Message"));
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    const { content } = req.body;
    const newMessage = new Message_1.default({ content });
    try {
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    }
    catch (err) {
        // res.status(400).json({ message: err.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const messages = await Message_1.default.find();
        res.status(200).json(messages);
    }
    catch (err) {
        // res.status(500).json({ message: err.message });
    }
});
exports.default = router;
