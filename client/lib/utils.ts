export interface NameValue {
    name: string;
    value: string;
}

export function enumToList<T>(e: T, values: boolean = false): string[] {
    return Object.keys(e).filter(k => typeof e[k as keyof T] === "number")
        .map(k => values ? e[k as keyof T].toString() : k);
}

export function enumToNVList<T>(e: T): NameValue[] {
    return Object.keys(e)
        .filter(k => typeof e[k as keyof T] === "number")
        .map(k => ({ name: k, value: e[k] }));
}