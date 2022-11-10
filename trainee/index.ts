//  https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md

// utils import
type MyExtract<T, K> = T extends K ? T : never;

type MyExclude<T, K> = T extends K ? never : T;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
/**
 * Pick [4]
 */

type MyPick<T, K extends keyof T> = {
  [V in K]: T[V];
};

type Answer_4 = MyPick<Todo, "title">;

/**
 * Readonly
 */

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Answer_8 = MyReadonly<Todo>;

/**
 * Omit
 */
type MyOmit<T, K extends keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type Answer_3 = MyOmit<Todo, "description" | "title">;

/**
 * Tuple to Object
 */

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type GetV<T extends readonly any[]> = {
  [P in T[number]]: P;
};

type G = GetV<typeof tuple>;

// type Answer_11 = TupleToObject<Todo, "description" | "title">;