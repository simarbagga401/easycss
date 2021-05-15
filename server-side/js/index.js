"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const writeStyle_1 = require("./writeStyle");
// App configurations
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`app listening at ${port}`));
// Testing route
app.get('/', (req, res) => {
    res.send('Read Documentation for something at https://something.dev');
});
app.post('/styleRequest', (req, res) => {
    console.log(req.body);
    const { style, filePath } = req.body.styleRequestData;
    res.send('thank you');
    writeStyle_1.changeStyle({ style, filePath });
});
