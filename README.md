# nextleton

A super simple utility to create dev server safe singleton for your NextJS app.

Problem: When NextJS hot-reloads, it re-imports your files, re-creating instances of global variables. This is a problem if you want to create a singleton that is shared across your app. This is a problem for example if you want to create a database connection, or a logger, or a cache, or a service that you want to share across your app and you want the behaviour to be consistent across hot-reloads.

Solution: Use `nextleton` to create a singleton that is safe for hot-reloads.

## Installation

```bash
npm install nextleton
```

or

```bash
yarn add nextleton
```

## Usage

```typescript
import { nextleton } from "nextleton";

export const myFoo = nextleton("my-foo", () => initializeMyFoo());
```

## Caveats

If you change anything in your singleton'd code, you will need to restart your dev server for the changes to take effect, or simply change the key of your singleton, then the next hot-reload will re-create the singleton.
