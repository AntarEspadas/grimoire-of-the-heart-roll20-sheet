export function num<T>(obj: T): { [key in keyof T]: number } {
    const result: any = {}
    for (const key in obj) {
        const value = obj[key];
        result[key] = +value || 0
    }
    return result
}