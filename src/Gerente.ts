import Funcionario from "./Funcionario";

class Gerente extends Funcionario {
    private _nivel: string;

    constructor(nome: string, endereco: string, telefone: string, cpf: string, dataDeNascimento: Date, salario: number, agencia: string, nivel: string) {
        super(nome, endereco, telefone, cpf, dataDeNascimento, salario, agencia);
        this._nivel = nivel.toUpperCase();

        const niveisPermitidos = ["CONTA", "AGÊNCIA", "REGIONAL"];
        if (!niveisPermitidos.includes(this._nivel)) {
            throw new Error(`Nível inválido. Deve ser um dos seguintes: ${niveisPermitidos.join(", ")}`);
        }
    }

    public get nivel(): string {
        return this._nivel;
    }

    public set nivel(novoNivel: string) {
        const niveisPermitidos = ["CONTA", "AGÊNCIA", "REGIONAL"];
        if (!niveisPermitidos.includes(novoNivel)) {
            throw new Error(`Nível inválido. Deve ser um dos seguintes: ${niveisPermitidos.join(", ")}`);
        }
        this._nivel = novoNivel;
    }

    bonificacao(percentual: number): number;
    public bonificacao(percentual?: number): number {
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

    toString(): string {
        return `Gerente 
                Nível: ${this._nivel}
                ${super.toString()}`;
    }
}

export default Gerente;