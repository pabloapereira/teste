"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorPerso extends Error {
    constructor(novaArea) {
        super(`A área informada ${novaArea} é maior do que a area disponivel`);
    }
}
exports.default = ErrorPerso;
