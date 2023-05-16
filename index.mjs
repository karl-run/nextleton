export function nextleton(key, fn) {
  return ((glocal) => {
    glocal[key] = glocal[key] ?? fn();

    return glocal[key];
  })(global);
}
