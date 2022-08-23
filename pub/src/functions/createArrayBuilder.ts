import * as pl from "pareto-core-lib"
import { ArrayBuilder } from "../types/ArrayBuilder"

export function createArrayBuilder<T>(): ArrayBuilder<T> {
    const imp: T[] = []
    return {
        push: (value: T) => {
            imp.push(value)
        },
        getArray: () => {
            return pl.createArray(imp.slice(0))
        },
    }
}