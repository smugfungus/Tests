interface Game {
    id?: string | number;
    readonly title: string;
    description: string;
    genre: string;
    platform?: string[];
    getSimilars?: (title: string) => void;
}

const tlou: Game = {
    title: "The Last Of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale and Metro`);
    }
}

console.log(tlou.title);
if(tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];    
}

const leftBehind: DLC = {
    title: "The Last Of Us Left Behind",
    description: "A DLC for the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["New playable characters", "More 3 hours of game"],    
}

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;
    
    constructor(title: string, description: string, genre: string) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
}