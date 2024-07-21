import Pessoa from "./Pessoa"

class Funcionario extends Pessoa {
  private static qtFuncionarios: number = 0;

  private _matricula: number;
  private _salario: number;
  private _agencia: string;

  constructor(nome: string, endereco: string, telefone: string, cpf: string, dataDeNascimento: Date, salario: number, agencia: string) {
    super(nome, endereco, telefone, cpf, dataDeNascimento);
    this._salario = salario;
    
    if (agencia != "" && agencia.length == 4 && agencia.match(/^[0-9]+$/)) {
      this._agencia = agencia;
    } else {
      throw new Error("A agência deve ter exatamente 4 caracteres, sendo todos numéricos.")
    }

    Funcionario.qtFuncionarios++;
    this._matricula = Funcionario.qtFuncionarios;
  }

  public get matricula(): number {
    return this._matricula;
  }

  public get salario(): number {
    return this._salario;
  }

  public set salario(novoSalario: number) {
    if (novoSalario > 0.0) {
      this._salario = novoSalario;
    }
  }

  public get agencia(): string {
    return this._agencia;
  }

  public set agencia(novaAgencia: string) {
    if (novaAgencia != "" && novaAgencia.length == 4 && novaAgencia.match(/^[0-9]+$/)) {
      this._agencia = novaAgencia;
    }
    throw new Error("A agência deve ter exatamente 4 caracteres, sendo todos numéricos.")
  }

  public bonificacao(percentual?: number): number;
  public bonificacao(percentual: number): number {
      if (percentual <= 0) {
        throw new Error("Percentual deve ser maior que zero.");
      }
      return this._salario *= (1 + percentual / 100);
  }

  public toString(): string {
    return `${super.toString()}
                Matrícula: ${this._matricula}
                Salário: ${this._salario}
                Agência: ${this._agencia}`;
  }
}

export default Funcionario;