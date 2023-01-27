type toDo = {
    title: string;
    description: string;
    completed: boolean;
}

// Readonly
const ToDo: Readonly<toDo> = {
    title: "Assistir Filmes de novo",
    description: "Notar mais detalhes e ter mais entendimento",
    completed: false,
};

console.log(ToDo);

function updateToDo(ToDo: toDo, fieldsToUpdate: Partial<toDo>) {
    return { ...ToDo, ...fieldsToUpdate}
}

const todo2: toDo = updateToDo(ToDo, {completed: true})

console.log(todo2);

// Pick
type todoPreview = Pick<toDo, "title" | "completed" >

const todo3: todoPreview = {
    title: "Zerar saga witcher",
    completed: false,
};

// Omit
type todoPreview2 = Omit<toDo, "description">

const todo4: todoPreview = {
    title: "Zerar saga witcher",
    completed: false,
};