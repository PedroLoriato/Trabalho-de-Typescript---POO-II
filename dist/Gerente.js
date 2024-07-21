"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Gerente extends Funcionario_1.default {
    constructor(nome, endereco, telefone, cpf, dataDeNascimento, salario, agencia, nivel) {
        super(nome, endereco, telefone, cpf, dataDeNascimento, salario, agencia);
        this._nivel = nivel.toUpperCase();
        const niveisPermitidos = ["CONTA", "AGÊNCIA", "REGIONAL"];
        if (!niveisPermitidos.includes(this._nivel)) {
            throw new Error(`Nível inválido. Deve ser um dos seguintes: ${niveisPermitidos.join(", ")}`);
        }
    }
    get nivel() {
        return this._nivel;
    }
    set nivel(novoNivel) {
        const niveisPermitidos = ["CONTA", "AGÊNCIA", "REGIONAL"];
        if (!niveisPermitidos.includes(novoNivel)) {
            throw new Error(`Nível inválido. Deve ser um dos seguintes: ${niveisPermitidos.join(", ")}`);
        }
        this._nivel = novoNivel;
    }
    bonificacao(percentual) {
        if (percentual !== undefined) {
            return super.bonificacao(percentual);
        }
        switch (this._nivel) {
            case "CONTA":
                return super.salario *= 1.15;
            case "AGÊNCIA":
                return super.salario *= 1.20;
            case "REGIONAL":
                return super.salario *= 1.25;
            default:
                throw new Error("Nível inválido para cálculo de bonificação.");
        }
    }
    toString() {
        return `Gerente 
                Nível: ${this._nivel}
                ${super.toString()}`;
    }
}
exports.default = Gerente;
//# sourceMappingURL=Gerente.js.map