export declare function nextleton<Key extends string, Result>(
  key: Key,
  fn: () => Result
): Result;
