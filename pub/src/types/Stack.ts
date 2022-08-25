export type Stack<T> = {
    push: (v: T) => void
    isEmpty: () => boolean
    pop: <RV>(
        onNotEmpty: ($: T) => RV,
        onEmpty: () => RV,
    ) => RV
    empty: (callback: ($:T) => void) => void
}