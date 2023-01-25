// Alguns simbolos padrões
// S => State
// T => Type
// K => Key
// V => Value
// E => Element

type numOrString = number | string;

function useState<S extends numOrString = string>() {
    let state: S;

    function getState() {
        return state;
    }

    function setState(newState: S) {
        state = newState;
    }

    return {getState, setState};
}

const newState = useState<number>();

//newState.setState("123");
//console.log(newState.getState());

newState.setState(123);
console.log(newState.getState());