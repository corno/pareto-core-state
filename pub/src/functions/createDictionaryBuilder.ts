import * as pr from "pareto-core-internals"
import { DictionaryBuilder } from "../types/DictionaryBuilder"

export function createDictionaryBuilder<T>(
    duplicateStrategy:
        | ["ignore", {}]
        | ["overwrite", {}],
    onDuplicate: (key: string) => void,
): DictionaryBuilder<T> {
    const imp: { [key: string]: T } = {}
    return {
        add: (key: string, value: T) => {
            if (imp[key] !== undefined) {
                if (duplicateStrategy[0] === "overwrite") {
                    imp[key] = value
                }
                onDuplicate(key)
            }
            imp[key] = value
        },
        getDictionary: () => {
            const clone: { [key: string]: T } = {}
            Object.keys(imp).forEach(($) => {
                clone[$] = imp[$]
            })
            return pr.wrapRawDictionary(clone)
        },
    }
}