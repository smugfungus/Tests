// Type Alias

// APENAS PARA FINS DE COMPARAÇÃO
// Definição
// Aviso: Todas as variaveis com "1" apenas para não conflitar nomes
type Game1 = {
    title?: string;
}

type DLC1 = {
    extra?: string;
}

// Intersection

type GameCollection1 = Game1 & DLC1 & {content: boolean};

// Implements

// class CreateGame1 implements GameCollection1 {} (comentado para não alertar do erro proposital)

// Declarar função

type getSimilars1 = (title: string) => void;

//=============Diferenças entre Alias e Interfaces=============//

// Permite declarar tipos primitivos
type ID1 = string | number;

// Pode declarar tuplas normalmente
type Tuple1 = [number, number];

[1, 2] as Tuple1

// Apenas uma declaração por escopo

//type JQuery1 = {a: string};  (comentados para não alertar sobre o erro proposital)
//type JQuery1 = {b; string};  

// Mais recomendado: 
// Na maioria das vezes
// React - Props

// CONSISTÊNCIA!