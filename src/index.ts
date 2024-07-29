import Pessoa from "./Pessoa";
import Funcionario from "./Funcionario";
import Gerente from "./Gerente";
import Atendente from "./Atendente";
import Cliente from "./Cliente";

// Listar gerentes e atendentes
const vetFuncionarios: Funcionario[] = [
    new Gerente("Antonio", "Rua do Lazer, 15", "(27) 99148-1345", "213.456.789-00", new Date("1980/08/18"), 3000, "0001", "Conta"),
    new Atendente("Marcos", "Rua 14 de julho, 46", "(27) 97283-6539", "343.412.723-01", new Date("1987/07/30"), 1500, "0001", "Caixa"),
    new Gerente("Luiza", "Rua das Azaléias, 42", "(27) 98736-5273", "213.142.453-02", new Date("2002/10/22"), 2150, "0002", "Agência"),
    new Atendente("Bernado", "Rua Coronel Avancini, 41", "(27) 99736-6734", "327.479.779-03", new Date("2000/06/28"), 2100, "0002", "Pessoal"),
    new Gerente("Maria", "Rua Hilario Pasolini, 23", "(27) 99384-3490", "583.292.603-04", new Date("1991/02/26"), 3500, "0001", "Regional"),
    new Atendente("Karol", "Rua São Lourenço, 11", "(27) 96290-2732", "603.292.183-05", new Date("1995/01/12"), 1415, "0001", "Caixa"),
    new Gerente("João", "Rua Coronel Bonfim, 31", "(27) 94512-9183", "173.262.593-06", new Date("1998/04/11"), 1800, "0002", "Conta"),
    new Atendente("Andressa", "Rua São Pedro, 41", "(27) 99832-1452", "363.582.703-07", new Date("2003/06/24"), 2400, "0002", "Pessoal")
];

console.log("\n\nUsar o método toString() em objetos gerente e atendente");
vetFuncionarios.forEach(funcionario => {
    console.log(funcionario.toString());
});

console.log("\n\nUsar o método bonificacao() em objetos gerente e atendente, sem informar o valor do percentual como parâmetro");
vetFuncionarios.forEach(funcionario => {
    console.log(`
        ${funcionario.toString()} 
        Bonificação: ${funcionario.bonificacao().toFixed(2)}`
    );
});

console.log("\n\nUsar o método bonificacao(percentual) em objetos gerente e atendente, informando o valor do percentual como parâmetro");
vetFuncionarios.forEach(funcionario => {
    console.log(`
        ${funcionario.toString()}
        Bonificação: ${funcionario.bonificacao(10).toFixed(2)}`
    );
});

// Inserir um objeto da classe Cliente no vetor de Funcionários e conferir a mensagem de erro.
const cliente = new Cliente("Ana", "Rua das Flores, 25", "(27) 99888-7777", "234.123.456-48", new Date("1998/12/24"), "0008");

// Retire o comentário da linha abaixo para visualizar a mensagem de erro.
//vetFuncionarios.push(cliente);
/*
error TS2345: Argument of type 'Cliente' is not assignable to parameter of type 'Funcionario'.
  Type 'Cliente' is missing the following properties from type 'Funcionario': _matricula, _salario, matricula, salario, bonificacao

44 vetFuncionarios.push(cliente);
                        ~~~~~~~


Found 1 error in src/index.ts:44
*/