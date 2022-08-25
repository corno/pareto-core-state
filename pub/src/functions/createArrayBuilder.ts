import * as pr from "pareto-core-raw"
import { ArrayBuilder } from "../types/ArrayBuilder"

export function createArrayBuilder<T>(): ArrayBuilder<T> {
    const imp: T[] = []
    return {
        push: (value: T) => {
            imp.push(value)
        },
        getArray: () => {
            return pr.wrapRawArray(imp.slice(0))
        },
    }
}