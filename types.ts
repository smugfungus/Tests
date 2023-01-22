// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 20.3

// array (type[])
let items: number[]
items = [1, 2, 3]

let values: Array<number>
values = [4, 5, 6]

// tuple
let title: [number, string, string]
title = [1, "foo", "bar"]

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any
coisa = [1];

// void (Vazio)
function logger(): void {
    console.log('foo')
}
 
//null | undefined 
type Bla = string | undefined

// never
function error(): never {    
    throw new Error("error");
}

// object
let cart: object;

cart = {
    key: "fi"
}

// Type Inference (Define a var de acordo com o que foi passado)
let message2 = "mensagem definida"
message2 = "string nova"

window.addEventListener("click", (e) => {
    console.log(e.target);    
})
