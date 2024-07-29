import Funcionario from "./Funcionario";

class Gerente extends Funcionario {
    private _nivel: string;

    constructor(nome: string, endereco: string, telefone: string, cpf: string, dataDeNascimento: Date, salario: number, agencia: string, nivel: string) {
        super(nome, endereco, telefone, cpf, dataDeNascimento, salario, agencia);

        if (nivel === "") throw new Error("O nível deve ser informado");
        this._nivel = nivel.toUpperCase();

        const niveisPermitidos = ["CONTA", "AGÊNCIA", "REGIONAL"];
        if (!niveisPermitidos.includes(this._nivel))
            throw new Error(`Nível inválido. Deve ser um dos seguintes: ${niveisPermitidos.join(", ")}`);
    }

    public get nivel(): string {
        return this._nivel;
    }

    public set nivel(novoNivel: string) {
        const niveisPermitidos = ["CONTA", "AGÊNCIA", "REGIONAL"];
        if (!niveisPermitidos.includes(novoNivel))
            throw new Error(`Nível inválido. Deve ser um dos seguintes: ${niveisPermitidos.join(", ")}`);
        this._nivel = novoNivel;
    }

    public bonificacao(percentual?: number): number {
        if (percentual !== undefined) return super.bonificacao(percentual);
        
        const prcBonificacao = this._nivel === "CONTA" ? 0.15 : this.nivel === "AGÊNCIA" ? 0.20 : 0.25;

        return super.salario * prcBonificacao;
    }

    public toString(): string {
        return `Gerente 
                Nível: ${this._nivel}
                ${super.toString()}`;
    }
}

export default Gerente;