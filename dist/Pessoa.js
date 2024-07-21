"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, endereco, telefone, cpf, dtNascimento) {
        this._nome = nome.toUpperCase();
        this._endereco = endereco;
        if (telefone != "" && telefone.length == 15) {
            this._telefone = telefone;
        }
        else {
            throw new Error("O telefone deve seguir o formato (XX) XXXXX-XXXX");
        }
        if (cpf != "" && cpf.length == 14) {
            this._cpf = cpf;
        }
        else {
            throw new Error("O cpf deve seguir o formato XXX.XXX.XXX-XX");
        }
        this._dtNascimento = dtNascimento;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        if (novoNome != "") {
            this._nome = novoNome.toUpperCase();
        }
    }
    get endereco() {
        return this._endereco;
    }
    set endereco(novoEndereco) {
        if (novoEndereco != "") {
            this._endereco = novoEndereco;
        }
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(novoTelefone) {
        if (novoTelefone != "" && novoTelefone.length == 15) {
            this._telefone = novoTelefone;
        }
    }
    get cpf() {
        return this._cpf;
    }
    get data() {
        return this._dtNascimento;
    }
    set dtNascimento(novaData) {
        if (novaData != undefined && novaData != null) {
            this._dtNascimento = novaData;
        }
    }
    toString() {
        return `Nome: ${this._nome}
                Endereço: ${this._endereco} 
                Telefone: ${this._telefone} 
                CPF: ${this._cpf} 
                Data de Nascimento: ${this._dtNascimento.toLocaleDateString()}`;
    }
}
exports.default = Pessoa;
//# sourceMappingURL=Pessoa.js.map