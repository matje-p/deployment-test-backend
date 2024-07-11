"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const messageRoutes_1 = __importDefault(require("./routes/messageRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.error(err));
app.use('/messages', messageRoutes_1.default);
// Serve static files from the frontend
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'frontend', 'dist')));
// Catch all other routes and return the index.html
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
