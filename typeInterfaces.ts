// Interfaces

// APENAS PARA FINS DE COMPARAÇÃO
// Definição
// Variaveis com "1" no fim apenas para evitar conflitos
interface Game {
    title1?: string;
}

interface DLC {
    extra?: string;
}

// Interseção | extends

interface GameCollection extends Game, DLC {}

// Implements

//class CreateGame implements GameCollection {} (comentado para não alertar sobre erro proposital)

// Declarar função
interface getSimilars {
    (title1: string): void;
}

//============Diferenças entre Interfaces e Alias===============//
//interface ID extends number {} (comentado para não alertar sobre erro proposital)

// Não consigo definir tuplas na interface
interface Tuple {
    0: number;
    1: number;
}
[1, 2, 3, "sus"] as Tuple;

// Pode ter multiplas declarações e ele une de mesmo nome

interface JQuery {
    a: string;
}

interface JQuery {
    b: string;
}

const $: JQuery = {
    a: "bla",
    b: "foo",
};

// Quando tiver criando libs prefira interfaces, porque são mais extensíveis!

// Criando objetos/classes (POO)