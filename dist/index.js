"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Gerente_1 = __importDefault(require("./Gerente"));
const funcionarios = [
    new Gerente_1.default("Pedro", "Rua das Laranjeiras, 123", "123-456-789", "123.456.789-00", new Date("1990/10/18"), 1000, "0001", "Conta"),
    new Gerente_1.default("João", "Rua das Laranjeiras, 123", "123-456-789", "123.456.789-00", new Date("1990/10/17"), 1000, "0002", "Agência")
];
funcionarios.forEach((funcionario) => {
    console.log(funcionario.bonificacao(10));
});
funcionarios.forEach((funcionario) => {
    console.log(funcionario.toString());
});
//# sourceMappingURL=index.js.map