
export type parsedObjProps = {
    required: boolean
    type: string
    key: string
}

export function parseJson(object: { [k: string]: string }) : parsedObjProps[] {
    return Object.keys(object).map((key) => ({
        required: !object[key].includes("?"),
        type: !object[key].includes("?") ? object[key] : object[key].slice(1),
        key
    }))
}
