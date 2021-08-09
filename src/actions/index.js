export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const ADD_MEMORY = 'ADD_MEMORY';
export const ADD_MEMORY_TO_TOTAL = 'ADD_MEMORY_TO_TOTAL';
export const RESET_MEMORY = 'RESET_MEMORY';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return ({type: CHANGE_OPERATION, payload: operator});
}

export const clearDisplay = () => {
    return ({type: CLEAR_DISPLAY});
}

export const addMemory = (number) => {
    return ({type: ADD_MEMORY, payload: number});
}

export const addMemoryToTotal = () => {
    return ({type: ADD_MEMORY_TO_TOTAL});
}

export const resetMemory = () => {
    return ({type: RESET_MEMORY});
}