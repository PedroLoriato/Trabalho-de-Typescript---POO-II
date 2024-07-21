class Pessoa {
    private _nome: string;
    private _endereco: string;
    private _telefone!: string;
    private _cpf: string;
    private _dtNascimento: Date;

    constructor(nome: string, endereco: string, telefone: string, cpf: string, dtNascimento: Date) {
        this._nome = nome.toUpperCase();
        this._endereco = endereco;

        if (telefone != "" && telefone.length == 15) {
            this._telefone = telefone;
        } else {	
            throw new Error("O telefone deve seguir o formato (XX) XXXXX-XXXX");
        }

        if (cpf != "" && cpf.length == 14) {
            this._cpf = cpf;
        } else {
            throw new Error("O cpf deve seguir o formato XXX.XXX.XXX-XX");
        }

        this._dtNascimento = dtNascimento;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(novoNome: string) {
        if (novoNome != "") {
            this._nome = novoNome.toUpperCase();
        }
    }

    public get endereco(): string {
        return this._endereco;
    }

    public set endereco(novoEndereco: string) {
        if (novoEndereco != "") {
            this._endereco = novoEndereco;
        }
    }

    public get telefone(): string {
        return this._telefone;
    }

    public set telefone(novoTelefone: string) {
        if (novoTelefone != "" && novoTelefone.length == 15) {
            this._telefone = novoTelefone;
        }
    }

    public get cpf(): string {
        return this._cpf;
    }

    public get data(): Date {
        return this._dtNascimento;
    }

    public set dtNascimento(novaData: Date) {
        if (novaData != undefined && novaData != null) {
            this._dtNascimento = novaData;
        }
    }

    public toString(): string {
        return `Nome: ${this._nome}
                Endereço: ${this._endereco} 
                Telefone: ${this._telefone} 
                CPF: ${this._cpf} 
                Data de Nascimento: ${this._dtNascimento.toLocaleDateString()}`;
    }
}

export default Pessoa;