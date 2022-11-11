/**
 * ReturnType
 */

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type MyReturnType<T extends (...v: any[]) => any> = T extends (
  ...args: any[]
) => infer A
  ? A
  : never;

type Answer_2 = MyReturnType<typeof fn>;

/**
 * Omit
 */
type MyExclude_util<T, K> = T extends K ? never : T;

type MyOmits<T, K extends keyof T> = {
  [P in MyExclude_util<keyof T, K>]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type Answer__2 = MyOmits<Todo, "description" | "title">;

/**
 * DeepReadonly
 */

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type MyDeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? MyDeepReadonly<T[P]> : T[P];
};

type Answer_9 = MyDeepReadonly<X>;
