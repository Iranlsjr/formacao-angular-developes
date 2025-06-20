"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Funções
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
let resultadoNome = addToHello("Iran");
console.log(resultadoNome);
// Funcoes Multi types
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone("11994984709")); // string
console.log(callToPhone(11994984709)); // number
//Funçoes async
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Iran";
    });
}
console.log(getDatabase(1));
