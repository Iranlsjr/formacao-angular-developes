type heroi = {
  name: string;
  vulgo: string;
};

function printaObjeto(gitgipessoa: heroi) {
  console.log(pessoa);
}
printaObjeto({
  name: "Bruce Wayne",
  vulgo: "Batman",
});

//Variáveis

//Tipos Primitivos: boolean
//Tipos Primitivos: number
//Tipos Primitivos: String
let ligado: boolean = false;
let nome: string = "Iran";
let idade: number = 30;
let altura: number = 1.72;

//Tipos especiais: null
//Tipos especiais: undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// Tipo Abrangentes: any
// Tipo Abrangentes: void
let retorno: void 
function executQuery(): void{}
let retornoView: any =  "Aceita qualquer coisa"
