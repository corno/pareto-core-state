import { Dictionary } from "pareto-core-types"

export type DictionaryBuilder<T> = {
    readonly "add": (key: string, value: T) => void
    readonly "getDictionary": () => Dictionary<T>
}