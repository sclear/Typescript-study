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

type MyTrimLeft<T extends string> = T extends ` ${infer A}` ? MyTrimLeft<A> : T;

type Answer_106 = MyTrimLeft<"  Hello">;

/**
 * trim
 */

type MyTrim<T extends string> = T extends ` ${infer A}` | `${infer A} `
  ? MyTrim<A>
  : T;

type Answer_108 = MyTrim<"  Hello World  ">;

/**
 * Capitalize - 首字母大写
 */

type MyCapitalize<T extends string> = T extends `${infer First}${infer arg}`
  ? `${Uppercase<First>}${arg}`
  : never;

type Answer_110 = MyCapitalize<"pizz">;

/**
 * Replace
 */

type MyReplace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer A}${From}${infer B}` ? `${A}${To}${B}` : never;

type Answer_116 = MyReplace<"new map", " ", " | ">;

/**
 * Lookup - 寻找联和类型公共类型
 */
// TODO: 审题错误
type MyLookup<T, U> = T extends U ? T : never;

type Answer_190 = MyLookup<1 | 3, 3>;

/**
 * Pop 出堆
 */

type MyPop<T extends unknown[]> = T extends [...infer A, infer B] ? A : never;

type Answer_16 = MyPop<[1, 2, 3, 4, 5]>;

/**
 * Permutation
 */

type Permutation<T, U = T> = [T] extends [never]
  ? []
  : U extends T
  ? [U, ...Permutation<Exclude<T, U>>]
  : never;

type Answer_296 = Permutation<"A" | "B" | "C">;
