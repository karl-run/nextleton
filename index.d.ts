export declare function nextleton<Key extends string, Result>(
  key: Key,
  fn: () => Result
): Result;

export declare function lazyNextleton<Key extends string, Result>(
  key: Key,
  fn: () => Result
): () => Result;
