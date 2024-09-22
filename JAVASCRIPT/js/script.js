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

//FUNCTIONS

function minhaFuncao() {
    console.log("testando");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa");
funcaoComParametro("outra função");

// return
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 4));

// escopo da função
let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função é: ${y}`)
}
console.log(`Y fora da função é: ${y}`)

testandoEscopo();

//arrow function
const testeArrow = () => console.log("uma arrow function");
testeArrow()

const parOuImpar = (n) => n % 2 === 0 ? console.log("Par") : console.log("ímpar");
parOuImpar(5)
parOuImpar(10)

//argumentos opcionais
const multiplication = function (m, n) {
    if (n === undefined) {
        return m * 2
    }
    else {
        return m * n;
    }
}
console.log(multiplication(5))
console.log(multiplication(2, 4))

const greeting = (name) => {
    if (!name) {
        console.log("Olá, bem-vindo!")
        return;
    }
    console.log(`Olá ${name}, bem-vindo!`)

}
greeting()
greeting("Victória")

//argumento default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Matheus"))
console.log(customGreeting("João", "Bom dia"))

// closure
function someFunction() {
    let txt = "Alguma coisa"
    function display() {
        console.log(txt);
    }
    display();
}
someFunction();

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    }
}
const c1 = multiplicationClosure(5)
const c2 = multiplicationClosure(10)

console.log(c1(8), c2(10))

// recursao
const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A função parou de executar.")
    }
    else {
        const x = n - m
        console.log(x)
        untilTen(x, m)
    }
}
untilTen(100, 7)

// arrays e objetos
const lista = [1, 2, 3, 4, 5]
console.log(lista)
console.log(typeof (lista))

const itens = ["Victoria", 23, 1.60, true]
console.log(itens)

//propriedades
const numbers = [5, 3, 4]
console.log(numbers.length)
console.log(numbers["length"])

//métodos
const otherNumbers = [1, 2, 3]
const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)

const text = "Algum texto"
console.log(text.toUpperCase())
console.log(text.indexOf("g"))

// objetos (objects literals)
const person = {
    name: "Victoria",
    age: 23,
    job: "Programador",
};

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.job)
console.log(person.name.length)

//criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car)
car.doors = 4
console.log(car)
delete car.km
console.log(car)

// mais sobre objetos
const obj = {
    a: "teste",
    b: true
};
console.log(obj instanceof Object)

const obj2 = {
    c: []
};
// junta as propriedades
Object.assign(obj2, obj);
console.log(obj2);

console.log(Object.keys(obj))
console.log(Object.keys(car))

console.log(Object.entries(car))
// mutação 
const a = {
    name: "victoria"
}
// referência
const b = a;

a.age = 23
console.log(a)
console.log(b)

// loop em array
const users = ["Matheus", "João", "José"]

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`)
}

// push and pop (adiciona ou remove no fim da lista)
const array = ["a", "b", "c"]
array.push("d")
console.log(array)
console.log(array.pop())
array.push("f", "j", "k")
console.log(array)

// shift e unshift (adiciona ou remove no inicio da lista)
const letters = ["a", "b", "c"];
const letterRemoved = letters.shift();
console.log(letterRemoved)
console.log(letters)
letters.unshift("p", "q")
console.log(letters)

// indexof e lastindexof
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]
console.log(myElements.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate"))
console.log(myElements[myElements.indexOf("Maçã")])
console.log(myElements.lastIndexOf("Abacate"))
//retorna -1
console.log(myElements.indexOf("Mamão"))

// slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]
const subArray = testeSlice.slice(2, 4 + 1)
console.log(testeSlice)
console.log(subArray)

const subArray2 = testeSlice.slice(2)
console.log(subArray2)

//forEach
const nums = [1, 2, 3, 4, 5]
nums.forEach((n) => {
    console.log(`o número é ${n}`);
})

const posts = [
    { title: "Primeiro post", category: "PHP" },
    { title: "Segundo post", category: "Javascript" },
    { title: "Terceiro post", category: "Python" },
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title} da categoria: ${post.category}`)
})

// includes
const brands = ['BMV', 'VW', 'Fiat']
console.log(brands.includes("Fiat"))
console.log(brands.includes("Kia"))

// reverse
const reverseTest = [1, 2, 3, 4, 5]
reverseTest.reverse()
console.log(reverseTest)

// trim
const trimTest = "  testando\n  "
console.log(trimTest)
console.log(trimTest.trim())
console.log(trimTest.length)
console.log(trimTest.trim().length)

// padstart e padend
const testePadStart = "1"
const newNumber = testePadStart.padStart(4, "0")
console.log(newNumber)

const testePadEnd = newNumber.padEnd(10, "0")
console.log(testePadEnd)

//split
const frase = "o rato roeu a roupa do rei de Roma"
const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase)

//join
const fraseDenovo = arrayDaFrase.join(" ");
console.log(fraseDenovo)

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]
const fraseCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`
console.log(fraseCompra)

//repeat
const palavra = "testando "
console.log(palavra.repeat(5))

// Rest operator / Rest Parameters
const somaInfinita = (...args) => {
    let total = 0;
    args.forEach((arg) => {
        total += arg;
    });
    return total;
}
console.log(somaInfinita(1, 2, 3, 4, 5))

// for...of
const somaInfinita2 = (...args) => {
    let total = 0;
    for (num of args) {
        total += num;
    }
    return total;
}
console.log(somaInfinita2(1, 2, 4, 5))

//destructuring em objetos
const userDetails = {
    firstName: "Victória", 
    lastName: "Santos",
    job: "Programador"
}
const {firstName, lastName, job} = userDetails;
console.log(firstName, lastName, job)

// renomear variáveis
const{firstName: primeiroNome} = userDetails;
console.log(primeiroNome)

//destructuring em arrays
const myList = ["Avião", "submarino", "Carro"]
const[veiculoA, veiculoB, veiculoC] = myList;
console.log(veiculoA, veiculoB, veiculoC)

// JSON
const myJson = '{"name": "victoria", "age": 23, "skills": ["Java", "Javascript"]}'

// JSON para Object
const myObject = JSON.parse(myJson);
console.log(myObject)
console.log(myObject.name)

// Object para JSON
const myNewJson = JSON.stringify(myObject);
console.log(myNewJson)