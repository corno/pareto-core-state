import { DictionaryBuilder } from "../types/DictionaryBuilder"
import { createDictionaryBuilder } from "./createDictionaryBuilder"

export function createUnsafeDictionaryBuilder<T>(): DictionaryBuilder<T> {
    return createDictionaryBuilder(
        ["ignore", {}],
        (key) => {
            throw new Error(`CORE: duplicate key: ${key}`)
        }
    )
}