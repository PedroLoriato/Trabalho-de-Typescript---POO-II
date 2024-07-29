"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, endereco, telefone, cpf, dtNascimento) {
        if (nome === "")
            throw new Error("O nome deve ser informado");
        this._nome = nome.toUpperCase();
        if (endereco === "")
            throw new Error("O endereço deve ser informado");
        this._endereco = endereco;
        if (telefone === "" && telefone.length !== 15)
            throw new Error("O telefone deve seguir o formato (XX) XXXXX-XXXX");
        this._telefone = telefone;
        if (cpf === "" && cpf.length !== 14)
            throw new Error("O CPF deve seguir o formato XXX.XXX.XXX-XX");
        this._cpf = cpf;
        if (dtNascimento === undefined || dtNascimento === null)
            throw new Error("A data de nascimento deve ser informada");
        this._dtNascimento = dtNascimento;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        if (novoNome != "")
            this._nome = novoNome.toUpperCase();
    }
    get endereco() {
        return this._endereco;
    }
    set endereco(novoEndereco) {
        if (novoEndereco != "")
            this._endereco = novoEndereco;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(novoTelefone) {
        if (novoTelefone != "" && novoTelefone.length == 15)
            this._telefone = novoTelefone;
    }
    get cpf() {
        return this._cpf;
    }
    get data() {
        return this._dtNascimento.toLocaleDateString();
    }
    set dtNascimento(novaData) {
        if (novaData != undefined && novaData != null)
            this._dtNascimento = novaData;
    }
    toString() {
        return `Nome: ${this._nome}
                Endereço: ${this._endereco} 
                Telefone: ${this._telefone} 
                CPF: ${this._cpf} 
                Data de Nascimento: ${this.data}`;
    }
}
exports.default = Pessoa;
//# sourceMappingURL=Pessoa.js.map