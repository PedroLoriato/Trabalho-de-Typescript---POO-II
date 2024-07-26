"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Cliente extends Pessoa_1.default {
    constructor(nome, endereco, telefone, cpf, dataDeNascimento, agencia) {
        super(nome, endereco, telefone, cpf, dataDeNascimento);
        this._agencia = agencia != undefined ? agencia : "001";
    }
    get agencia() {
        return this._agencia;
    }
    set agencia(novaAgencia) {
        if (novaAgencia != "") {
            this._agencia = novaAgencia;
        }
    }
    toString() {
        return "Cliente:\n" +
            super.toString() +
            "\nAgência : " + this._agencia;
    }
}
exports.Cliente = Cliente;
exports.default = Cliente;
//# sourceMappingURL=Cliente.js.map