//Funções
function addNumber(x: number, y: number): number {
  return x + y;
}
let soma: number = addNumber(4, 7);
console.log(soma);

function addToHello(name: string): string {
  return `Hello ${name}`;
}
let resultadoNome: string = addToHello("Iran");
console.log(resultadoNome);

// Funcoes Multi types
function callToPhone(phone: number | string): number | string {
  return phone;
}

console.log(callToPhone("11994984709")); // string
console.log(callToPhone(11994984709)); // number

//Funçoes async
async function getDatabase(id: number): Promise<string> {
  return "Iran";
}

console.log(getDatabase(1));
