export const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export const add = (n1, n2) => {
    return n1 + n2
}

export const subtract = (n1, n2) => {
    return n1 - n2
}

export const multiply = (n1, n2) => {
    return n1 * n2
}

export const divide = (n1, n2) => {
    return n1 / n2
}