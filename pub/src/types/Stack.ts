export type Stack<T> = {
    push: (v:T) => void
    isEmpty: () => boolean
    pop: () => T
}