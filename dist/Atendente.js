"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Atendente extends Funcionario_1.default {
    constructor(nome, endereco, telefone, cpf, dataDeNascimento, salario, agencia, tipo) {
        super(nome, endereco, telefone, cpf, dataDeNascimento, salario, agencia);
        this._tipo = tipo.toUpperCase();
        const tiposPermitidos = ["CAIXA", "PESSOAL"];
        if (!tiposPermitidos.includes(this._tipo)) {
            throw new Error(`Tipo inválido. O tipo deve ser um dos seguintes: ${tiposPermitidos.join(", ")}`);
        }
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(novoTipo) {
        const tiposPermitidos = ["CAIXA", "PESSOAL"];
        if (!tiposPermitidos.includes(novoTipo)) {
            throw new Error(`Tipo inválido. O tipo deve ser um dos seguintes: ${tiposPermitidos.join(", ")}`);
        }
        this._tipo = novoTipo;
    }
    bonificacao(percentual) {
        if (percentual !== undefined) {
            return super.bonificacao(percentual);
        }
        if (this._tipo == "CAIXA") {
            return super.salario *= 1.07;
        }
        else if (this._tipo == "PESSOAL") {
            return super.salario *= 1.1;
        }
        else {
            throw new Error("Tipo inválido, portanto não é possivél calcular a bonificação.");
        }
    }
    toString() {
        return `Atendente 
                Tipo: ${this._tipo}
                ${super.toString()}`;
    }
}
exports.default = Atendente;
//# sourceMappingURL=Atendente.js.map