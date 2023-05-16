export declare function nextleton<Key extends string, Result>(
  key: Key,
  fn: () => Result
): Result;

declare interface LazyNextleton {
  <Result>(fn: () => Result): () => Result;

  reset: () => void;
}

export declare function lazyNextleton<Key extends string, Result>(
  key: Key,
  fn: () => Result
): LazyNextleton<Result>;
