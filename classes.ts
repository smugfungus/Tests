abstract class UserAccount {
    public name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    
    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }

}

class CharAccount extends UserAccount {
    private nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    get getlevel() {
        console.log("------GET------");
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old and has the char ${this.nickname} at level ${this.level}.`);
    }
}

//const Rapha = new UserAccount("Raphael", 19); (A classe por ser abstrata nao permite criar objetos)
//console.log(Rapha);                           (Apenas permitindo criar extensões dessa classe.)
//Rapha.logDetails();

const Melo = new CharAccount("Raphael", 19, "Smug", 17);
//Melo.nickname = "Smugfungus"; (Não altera pois nickname é privado e só acessado dentro da propria classe)
console.log(Melo);
Melo.logDetails();
Melo.logCharDetails();

Melo.setLevel = 20;
console.log(Melo.getlevel);

//modifiers (public - all access, private - access inside the class, protected - access inside the classes and subclasses, readonly)