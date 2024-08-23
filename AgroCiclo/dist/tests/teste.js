"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExemploJest_1 = __importDefault(require("../model/ExemploJest"));
const ex = new ExemploJest_1.default();
test("teste do getDouble", () => {
    expect(ex.getDouble(5)).toBe(10);
});
