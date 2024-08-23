"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Muda {
    constructor(name, tempoCresci) {
        this.name = "";
        this.tempoCresci = 0;
        this.setName(name);
        this.setCiclo(tempoCresci);
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setCiclo(tempoCresci) {
        this.tempoCresci = tempoCresci;
    }
    getCiclo() {
        return this.tempoCresci;
    }
    previsaoColheita() {
        return 240;
    }
}
exports.default = Muda;
