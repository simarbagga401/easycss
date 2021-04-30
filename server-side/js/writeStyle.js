"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeSize = exports.changeColor = void 0;
const fs_1 = __importDefault(require("fs"));
const changeColor = ({ elementSelector, type, value }) => {
    let data;
    switch (type) {
        case 'background':
            data = `${elementSelector}{background-color:${value}}`;
            break;
        case 'text':
            data = `${elementSelector}{color:${value}}`;
            break;
        case 'border':
            data = `${elementSelector}{border-color:${value}}`;
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
        console.error('writeStyle error');
    }
};
exports.changeColor = changeColor;
const changeSize = ({ elementSelector, type, value, }) => {
    let data;
    switch (type) {
        case 'border':
            data = `${elementSelector}{border:${value}}`;
            break;
        case 'border-radius':
            data = `${elementSelector}{border-radius:${value}}`;
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
        console.error('writeStyle error');
    }
};
exports.changeSize = changeSize;
