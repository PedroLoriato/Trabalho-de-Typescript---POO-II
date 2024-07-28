"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Gerente_1 = __importDefault(require("./Gerente"));
const Atendente_1 = __importDefault(require("./Atendente"));
const Cliente_1 = __importDefault(require("./Cliente"));
// Listar gerentes e atendentes
const vetFuncionarios = [
    new Gerente_1.default("Antonio", "Rua do Lazer, 15", "(27) 99148-1345", "213.456.789-00", new Date("1980/08/18"), 3000, "0001", "Conta"),
    new Atendente_1.default("Marcos", "Rua 14 de julho, 46", "(27) 97283-6539", "343.412.723-01", new Date("1987/07/30"), 1500, "0001", "Caixa"),
    new Gerente_1.default("Luiza", "Rua das Azaléias, 42", "(27) 98736-5273", "213.142.453-02", new Date("2002/10/22"), 2150, "0002", "Agência"),
    new Atendente_1.default("Bernado", "Rua Coronel Avancini, 41", "(27) 99736-6734", "327.479.779-03", new Date("2000/06/28"), 2100, "0002", "Pessoal"),
    new Gerente_1.default("Maria", "Rua Hilario Pasolini, 23", "(27) 99384-3490", "583.292.603-04", new Date("1991/02/26"), 3500, "0001", "Regional"),
    new Atendente_1.default("Karol", "Rua São Lourenço, 11", "(27) 96290-2732", "603.292.183-05", new Date("1995/01/12"), 1415, "0001", "Caixa"),
    new Gerente_1.default("João", "Rua Coronel Bonfim, 31", "(27) 94512-9183", "173.262.593-06", new Date("1998/04/11"), 1800, "0002", "Conta"),
    new Atendente_1.default("Andressa", "Rua São Pedro, 41", "(27) 99832-1452", "363.582.703-07", new Date("2003/06/24"), 2400, "0002", "Pessoal")
];
console.log("\n\nUsar o método toString() em objetos gerente e atendente");
vetFuncionarios.forEach(funcionario => {
    console.log(funcionario.toString());
});
console.log("\n\nUsar o método bonificacao() em objetos gerente e atendente, sem informar o valor do percentual como parâmetro");
vetFuncionarios.forEach(funcionario => {
    console.log(`
        ${funcionario.toString()} 
        Bonificação: ${funcionario.bonificacao()}`);
});
console.log("\n\nUsar o método bonificacao(percentual) em objetos gerente e atendente, informando o valor do percentual como parâmetro");
vetFuncionarios.forEach(funcionario => {
    console.log(`
        ${funcionario.toString()}
        Bonificação: ${funcionario.bonificacao(10)}`);
});
// Inserir um objeto da classe Cliente no vetor de Funcionários e confira a mensagem de erro.
// Retire o comentário da linha abaixo para ver a mensagem de erro.
vetFuncionarios.push(new Cliente_1.default("Ana", "Rua das Flores, 25", "(27) 99888-7777", "234.123.456-48", new Date("1998/12/24"), "0008"));
//# sourceMappingURL=index.js.map