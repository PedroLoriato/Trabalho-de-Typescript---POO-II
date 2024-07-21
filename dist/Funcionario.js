"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Funcionario extends Pessoa_1.default {
    constructor(nome, endereco, telefone, cpf, dataDeNascimento, salario, agencia) {
        super(nome, endereco, telefone, cpf, dataDeNascimento);
        this._salario = salario;
        if (agencia != "" && agencia.length == 4 && agencia.match(/^[0-9]+$/)) {
            this._agencia = agencia;
        }
        else {
            throw new Error("A agência deve ter exatamente 4 caracteres, sendo todos numéricos.");
        }
        Funcionario.qtFuncionarios++;
        this._matricula = Funcionario.qtFuncionarios;
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    set salario(novoSalario) {
        if (novoSalario > 0.0) {
            this._salario = novoSalario;
        }
    }
    get agencia() {
        return this._agencia;
    }
    set agencia(novaAgencia) {
        if (novaAgencia != "" && novaAgencia.length == 4 && novaAgencia.match(/^[0-9]+$/)) {
            this._agencia = novaAgencia;
        }
        throw new Error("A agência deve ter exatamente 4 caracteres, sendo todos numéricos.");
    }
    bonificacao(percentual) {
        if (percentual <= 0) {
            throw new Error("Percentual deve ser maior que zero.");
        }
        return this._salario *= (1 + percentual / 100);
    }
    toString() {
        return `${super.toString()}
                Matrícula: ${this._matricula}
                Salário: ${this._salario}
                Agência: ${this._agencia}`;
    }
}
Funcionario.qtFuncionarios = 0;
exports.default = Funcionario;
//# sourceMappingURL=Funcionario.js.map