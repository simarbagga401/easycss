"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStyle = void 0;
const fs_1 = __importDefault(require("fs"));
const changeStyle = ({ style, filePath }) => {
    // dynamic template for a style.
    let styleData;
    if (style.element === 'var') {
        styleData = `
  ${Object.values(style.property)[0]}: ${style.value};`;
    }
    else {
        styleData = `
${style.element} {
  ${Object.values(style.property)[0]}: ${style.value};
}`;
    }
    if (styleData === null || styleData === undefined) {
        console.error('writeStyle error: styleData is null or undefined');
    }
    fs_1.default.appendFile(`../client-side/${filePath}`, styleData, (err) => {
        if (err)
            console.error(`nodejs fs error:  ${err}`);
    });
};
exports.changeStyle = changeStyle;
