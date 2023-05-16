const _global = global;

export function nextleton(key, fn) {
  return ((glocal) => {
    glocal[key] = glocal[key] ?? fn();

    return glocal[key];
  })(_global);
}

export function lazyNextleton(key, fn) {
  return () =>
    ((glocal) => {
      glocal[key] = glocal[key] ?? fn();

      return glocal[key];
    })(_global);
}
