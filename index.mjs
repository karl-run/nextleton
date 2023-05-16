export function nextleton(key, fn) {
  return ((glocal) => {
    glocal[key] = glocal[key] ?? fn();

    return glocal[key];
  })(globalThis);
}

export function lazyNextleton(key, fn) {
  return () =>
    ((glocal) => {
      glocal[key] = glocal[key] ?? fn();

      return glocal[key];
    })(globalThis);
}
