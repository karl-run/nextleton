export function nextleton(key, fn) {
    return (() => {
        globalThis[key] = globalThis[key] ?? fn();

        return globalThis[key];
    })();
}

export function lazyNextleton(key, fn) {
    const lazy = () =>
        (() => {
            globalThis[key] = globalThis[key] ?? fn();

            return globalThis[key];
        })();

    lazy.reset = () => {
        globalThis[key] = fn();
    }

    return lazy;
}
