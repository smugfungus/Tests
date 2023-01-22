// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;  // ? = opicional
}

const account: AccountInfo = {
    id: 12345,
    name: "Raphael",
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: "smug",
    level: 19
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123456,
    name: "Raphael",
    nickname: "smug",
    level: 19
}