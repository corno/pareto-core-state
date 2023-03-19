import * as pt from "pareto-core-types"

export type ArrayBuilder<T> = {
    readonly "push": (value: T) => void
    readonly "getArray": () => pt.Array<T>
}