// @Component
// @Selector
// @useState("dasdas")

// Factory
//function Logger(prefix: string) {
//    return (target: any) => {         // não sei por que sem o any não funciona, mas no video original funciona
//       console.log(`${prefix} - ${target}`);
//    }
//}

//@Logger("awesome")

//class foo {}

// Class decorator

//function setAPIVersion(apiVersion: string) {
//   return (constructor: any) => {
//        return class extends constructor {
//            version = apiVersion
//        }
//    }
//}

//decorator - anotar a versão da API
//@setAPIVersion("2.0.0")
//class API {}

//console.log(new API());

// Property decorator
// function minLength(length: number) {
//     return (target: any, key: string) => {
//         let val = target[key]

//         const getter = () => val;

//         const setter = (value: string) => {
//             if(value.length < length) {
//                 console.log(`Error: Você não pode criar ${key} < menor que ${length}.`)
//             } else {
//                 val = value
//             }
//         }

//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter,
//         });
//     }
// }

// class Movie {
//     // validação - se for menor que 5 - error
//     @minLength(5)
//     title: string;

//     constructor(t: string) {
//         this.title = t;
//     }
// }

// const movie = new Movie("Interstellar");
// console.log(movie.title);
// Method decorator

// function delay(ms: number) {
//     return (target: any, key: string, descriptor: PropertyDescriptor) => {
//         const originalMethod = descriptor.value;

//         descriptor.value = (...args: any) => {
//             console.log(`Esperando ${ms}...`);
//             setTimeout(() => {
//                originalMethod.apply(this, args)  //error TS2683: 'this' implicitly has type...
//             }, ms);

//             return descriptor;
//         }
//     }
// }

// class Greeter {
//     greeting: string;

//     constructor(g: string) {
//         this.greeting = g
//     }

//     // Esperar um tempo e aí vai rodar o método (ms)
//     @delay(1000)
//     greet() {
//         console.log(`Hello! ${this.greeting}`)
//     }
// }

// const pessoinha = new Greeter("Pessoinha!")
// pessoinha.greet();

// Parameter decorator
// Acessor decorator