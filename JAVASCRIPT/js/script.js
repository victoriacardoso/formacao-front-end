// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -12);

// 2 - operações aritméticas
console.log(2 + 4);
console.log(5 - 3);
console.log(5 * 3);
console.log(9 / 3);

// 3 - Special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * 'asd');
console.log(typeof NaN);

// 4 - Strings
console.log("um texto");
console.log("mais um texto");

// 5 - Símbolos especiais em string
console.log("testando a \nquebra de linha");
console.log("testando o \t tab");

// 6 - concatenação
console.log("oi" + "tudo" + "bem");
console.log(`testando ` + `crase`);

// 7 - Template strings ou interpolação
console.log(`a soma de 2 = 2 é: ${2 + 2}`);

// 8 - Booleanos
console.log(true);
console.log(5 > 20);

// 9 - Comparações
console.log(5 <= 5);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 === "10"); // valores devem ser idênticos
console.log(10 !== "10"); // valores diferentes em relação ao tipo
console.log(9 != 6);

// 10 - operadores lógicos
console.log(true && true);
console.log(5 > 2 && 7 < 3);
console.log(5 > 2 || 7 < 3);
console.log(!true);

// 11 - empty values
console.log(typeof null, typeof undefined);
console.log(null == undefined);
console.log(null === undefined);

// 12 - mudanças de tipos
console.log(5 * null);
console.log("10" + 1);
console.log("10" - 1);

// 13 - variáveis
let nome = "Victória";
console.log(nome);

nome = "Vic Cardoso";
console.log(nome);

// const x = prompt("digite um número");
// console.log(x);

// alert(x);

console.log(Math.max(2, 9, 25));
console.log(Math.floor(2.65)); // arrendonda pra baixo
console.log(Math.ceil(2.65)); // arrendonda pra cima

function minhaFuncao() {
    console.log("testando");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();