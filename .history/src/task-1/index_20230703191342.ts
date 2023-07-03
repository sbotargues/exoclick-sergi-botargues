// src/deepCopy.ts

/**
 * Deep copy function for TypeScript.
 * @param T Generic parameter that is automatically inferred from the type of the input object/array.
 * @param target The object/array to be copied.
 * @returns A deep copy of the target object/array.
 */
function deepCopy<T>(target: T): T {
    if (target === null) {
        return target;
    }
    if (typeof target === "object") {
        if (Array.isArray(target)) {
            return (target as any).map(deepCopy) as any;
        } else {
            return Object.fromEntries(
                Object.entries(target).map(([k, v]) => [k, deepCopy(v)])
            ) as any;
        }
    } else {
        return target;
    }
}

export default deepCopy;
