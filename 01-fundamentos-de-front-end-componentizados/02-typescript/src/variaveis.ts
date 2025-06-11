//Tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Iran";
let idade: number = 30;
let altura: number = 1.72;

//Tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoNiew: any = false;

//OBJETOS

//objeto - sem previsibilidade
let produto: object = {
  name: "Iran",
  cidade: "SP",
  idade: "32",
};
//Objeto tipado com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidade: number;
};
let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.99,
  unidade: 5,
};

//ARRAYS
let dados: string[] = ["Iran", "Ana"];
let dados2: Array<string> = [];

//Arrays multiplos
let infos: (string | number)[] = ["Iran", 30];

// arrays métodos
dados.reduce;

//Tuplas - segue uma ordem
let boleto: [string, number, number] = ["agua conta", 199.9, 123456];

//Dates
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
