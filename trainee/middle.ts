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

/**
 * TupleToUnion
 */
type Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type MyTupleToUnion<T extends unknown[]> = T[number] extends any
  ? T[number]
  : never;

type Answer_10 = MyTupleToUnion<Arr>;

// 递归

type MyTupleToUnion_Ra<T extends unknown[]> = T extends [infer A, ...infer B]
  ? A | MyTupleToUnion<B>
  : never;

type Answer_10_Ra = MyTupleToUnion<Arr>;

/**
 * Last
 */

type MyLast<T extends unknown[]> = T extends [...infer A, infer B] ? B : never;

type Answer_15 = MyLast<Arr>;

/**
 * TrimLeft
 */

type str = "  12123234";

type MyTrimLeft<T extends string> = T extends ` ${infer A}` ? MyTrimLeft<A> : T;

type Answer_106 = MyTrimLeft<str>;
