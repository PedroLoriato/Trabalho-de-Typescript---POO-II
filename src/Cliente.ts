import Pessoa from "./Pessoa";
export class Cliente extends Pessoa{
    private _agencia: string;

    constructor(nome: string, endereco: string, telefone: string, cpf: string, dataDeNascimento: Date, agencia?: string) {
        super(nome, endereco, telefone, cpf, dataDeNascimento);
        this._agencia = agencia != undefined ? agencia : "001";
    }

    get agencia() : string {
        return this._agencia;
    } 

    set agencia(novaAgencia: string)  {
        if (novaAgencia != "") {
            this._agencia = novaAgencia;
        }        
    }
    
    toString(): string{
        return "Cliente:\n"+
            super.toString() +
            "\nAgência : " + this._agencia;
    }
}

export default Cliente;