"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Gerente_1 = __importDefault(require("./Gerente"));
const TesteGerentes1 = [
    new Gerente_1.default("Pedro", "Rua das Laranjeiras, 27", "(01) 12345-6789", "213.456.789-00", new Date("1990/10/18"), 1000, "0001", "Conta"),
    new Gerente_1.default("Eduardo", "Rua das Margaridas, 43", "(02) 98765-4321", "484.232.789-00", new Date("1990/10/18"), 1000, "0001", "Agência"),
];
TesteGerentes1.forEach((funcionario) => {
    console.log(funcionario.bonificacao());
});
TesteGerentes1.forEach((funcionario) => {
    console.log(funcionario.toString());
});
const TesteGerentes2 = [
    new Gerente_1.default("Maria", "Avenida das Olarias, 123", "(03) 12345-6789", "435.456.789-32", new Date("1990/05/12"), 1000, "0001", "Regional"),
    new Gerente_1.default("João", "Rodovia dos Pássaros, 23", "(04) 98765-4321", "546.232.435-00", new Date("1990/10/18"), 1000, "0001", "Conta"),
];
TesteGerentes2.forEach((funcionario) => {
    console.log(funcionario.bonificacao(10));
});
TesteGerentes2.forEach((funcionario) => {
    console.log(funcionario.toString());
});
//# sourceMappingURL=index.js.map