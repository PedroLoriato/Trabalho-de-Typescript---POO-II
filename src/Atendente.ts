import Funcionario from "./Funcionario";

class Atendente extends Funcionario {
    private _tipo: string;

    constructor(nome: string, endereco: string, telefone: string, cpf: string, dataDeNascimento: Date, salario: number, agencia: string, tipo: string) {
        super(nome, endereco, telefone, cpf, dataDeNascimento, salario, agencia);
        this._tipo = tipo.toUpperCase();

        const tiposPermitidos = ["CAIXA", "PESSOAL"];
        if (!tiposPermitidos.includes(this._tipo)) {
            throw new Error(`Tipo inválido. O tipo deve ser um dos seguintes: ${tiposPermitidos.join(", ")}`);
        }
    }

    public get tipo(): string {
        return this._tipo;
    }

    public set tipo(novoTipo: string) {
        const tiposPermitidos = ["CAIXA", "PESSOAL"];
        if (!tiposPermitidos.includes(novoTipo)) {
            throw new Error(`Tipo inválido. O tipo deve ser um dos seguintes: ${tiposPermitidos.join(", ")}`);
        }
        this._tipo = novoTipo;
    }




    bonificacao(percentual: number): number;
    public bonificacao(percentual?: number): number {
        if (percentual !== undefined) {
            return super.bonificacao(percentual);
        }

        if (this._tipo == "CAIXA") {
            return super.salario *= 1.07;
        } else if (this._tipo == "PESSOAL") {
            return super.salario *= 1.1;
        } else {
            throw new Error("Tipo inválido, portanto não é possivél calcular a bonificação.");
        }
    }







    toString(): string {
        return `Atendente 
                Tipo: ${this._tipo}
                ${super.toString()}`;
    }
}

export default Atendente;