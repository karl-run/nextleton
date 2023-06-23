type Options = {
  disable?: boolean;
}

export declare function nextleton<Key extends string, Result>(
  key: Key,
  fn: () => Result,
  option?: Options,
): Result;

export declare function lazyNextleton<Key extends string, Result>(
  key: Key,
  fn: () => Result,
  option?: Options,
): {
  (): Result;
  reset(): void;
};
