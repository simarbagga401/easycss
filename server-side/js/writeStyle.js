"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStyle = void 0;
const fs_1 = __importDefault(require("fs"));
const changeStyle = ({ element, property, value, }) => {
    const data = `${element} { ${property}:${value} }`;
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
exports.changeStyle = changeStyle;
