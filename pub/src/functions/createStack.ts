import * as pl from "pareto-core-lib"
import * as pt from "pareto-core-types"


import { Stack } from "../types/Stack";

export function createStack<T>(seed: pt.Array<T>): Stack<T> {
    const imp: T[] = []
    
    seed.forEach(($) => {
        imp.push($)
    })

    //reversing, because the first element should be on top
    imp.reverse()

    return {
        pop: () => {
            const res = imp.pop()
            if (res === undefined) {
                pl.panic("popping an empty stack")
            } else {
                return res
            }
        },
        push: (v) => {
            imp.push(v)
        },
        isEmpty: () => {
            return imp.length === 0
        }
    }
}