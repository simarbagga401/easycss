"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const writeCssFile = () => {
    const data = '.btn{background-color:pink}';
    fs_1.default.appendFile('../client-side/style.css', data, (err) => {
        if (err)
            console.log(err);
    });
};
exports.default = { writeCssFile };
