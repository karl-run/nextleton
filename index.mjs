export function nextleton(key, fn, options = {}) {
    if (options.disable) return fn();

    return (() => {
        globalThis[key] = globalThis[key] ?? fn();

        return globalThis[key];
    })();
}

export function lazyNextleton(key, fn, options = {}) {
    const lazy = () =>
        (() => {
            if (options.disable) return fn();

            globalThis[key] = globalThis[key] ?? fn();

            return globalThis[key];
        })();

    lazy.reset = () => {
        globalThis[key] = fn();
    }

    return lazy;
}
