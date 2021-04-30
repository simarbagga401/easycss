"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeColor = void 0;
const fs_1 = __importDefault(require("fs"));
const changeColor = ({ elementSelector, type, color }) => {
    let data;
    switch (type) {
        case 'background':
            data = `${elementSelector}{background-color:${color}}`;
            break;
        case 'text':
            data = `${elementSelector}{color:${color}}`;
            break;
        case 'border':
            data = `${elementSelector}{border-color:${color}}`;
            break;
        default:
            break;
    }
    if (data) {
        fs_1.default.appendFile('../client-side/styles/some.scss', data, (err) => {
            if (err)
                console.error(err);
        });
    }
    else {
        console.error('no data provided');
    }
};
exports.changeColor = changeColor;
