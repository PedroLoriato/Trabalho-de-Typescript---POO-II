"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Gerente extends Funcionario_1.default {
    constructor(nome, endereco, telefone, cpf, dataDeNascimento, salario, agencia, nivel) {
        super(nome, endereco, telefone, cpf, dataDeNascimento, salario, agencia);
        if (nivel === "")
            throw new Error("O nível deve ser informado");
        this._nivel = nivel.toUpperCase();
        const niveisPermitidos = ["CONTA", "AGÊNCIA", "REGIONAL"];
        if (!niveisPermitidos.includes(this._nivel))
            throw new Error(`Nível inválido. Deve ser um dos seguintes: ${niveisPermitidos.join(", ")}`);
    }
    get nivel() {
        return this._nivel;
    }
    set nivel(novoNivel) {
        const niveisPermitidos = ["CONTA", "AGÊNCIA", "REGIONAL"];
        if (!niveisPermitidos.includes(novoNivel))
            throw new Error(`Nível inválido. Deve ser um dos seguintes: ${niveisPermitidos.join(", ")}`);
        this._nivel = novoNivel;
    }
    bonificacao(percentual) {
        if (percentual !== undefined)
            return super.bonificacao(percentual);
        const prcBonificacao = this._nivel === "CONTA" ? 0.15 : this.nivel === "AGÊNCIA" ? 0.20 : 0.25;
        return super.salario * prcBonificacao;
    }
    toString() {
        return `Gerente 
                Nível: ${this._nivel}
                ${super.toString()}`;
    }
}
exports.default = Gerente;
//# sourceMappingURL=Gerente.js.map