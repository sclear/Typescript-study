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

// !!: T extends never 运算中 T = never 会跳过分配返回T(非T不会)

type Permutation<T, U = T> = [T] extends [never]
  ? []
  : U extends T
  ? [U, ...Permutation<Exclude<T, U>>]
  : never;

type Answer_296 = Permutation<"A" | "B" | "C">;

/**
 * length of String
 */

type MyStrLength<
  T extends string,
  K extends any[] = []
> = T extends `${infer A}${infer B}` ? MyStrLength<B, [...K, A]> : K["length"];

type Answer_298 = MyStrLength<"喜欢 唱 跳 Rap 🏀">;

/**
 * Flatten
 */

type MyFlatten<T extends any[], K extends any[] = []> = T extends [
  infer A,
  ...infer B
]
  ? A extends any[]
    ? MyFlatten<[...A, ...B], K>
    : MyFlatten<B, [...K, A]>
  : K;

type Answer_459 = MyFlatten<[1, 2, [3, 4], [[[5]]]]>;

/**
 * Append to object
 */

type MyAppendToObject<T extends any, K extends string, V> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V;
};

type Test_527 = { id: "1" };

type Answer_527 = MyAppendToObject<Test_527, "value", 4>;

/**
 * Absolute
 */

type MyAbsolute<
  T extends string,
  R extends string = ""
> = `${T}` extends `${infer First}${infer B}`
  ? First extends "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
    ? MyAbsolute<B, `${R}${First}`>
    : First extends "-" | "+"
    ? MyAbsolute<B, R>
    : MyAbsolute<"", R>
  : R;

type Answer_529 = MyAbsolute<"-+100--.3434">;

/**
 * String to union
 */

type MyStrToUnion<
  T extends string,
  U extends any[] = []
> = T extends `${infer A}${infer B}` ? MyStrToUnion<B, [...U, A]> : U[number];

type Answer_531 = MyStrToUnion<"123">;

/**
 * Merge
 */
type Foo_599 = {
  name: string;
  age: string;
};

type Coo_599 = {
  age: number;
  sex: string;
};

type MyMerge<T extends object, U extends object> = {
  [P in keyof T | keyof U]: P extends keyof U
    ? U[P]
    : P extends keyof T
    ? T[P]
    : never;
};

type Answer_599 = MyMerge<Foo_599, Coo_599>;

/**
 * KebabCase
 */

type MyKebabCase<T, S extends string = ""> = T extends `${infer A}${infer B}`
  ? A extends Uncapitalize<A>
    ? MyKebabCase<B, `${S}${A}`>
    : S extends ""
    ? MyKebabCase<B, `${Uncapitalize<A>}`>
    : MyKebabCase<B, `${S}-${Uncapitalize<A>}`>
  : S;

type Answer_612 = MyKebabCase<"FooBarBaz">;

/**
 * Diff
 */

type Foo_645 = {
  a: string;
  b: number;
};
type Bar_645 = {
  a: string;
  c: boolean;
};

type HelperGetNullKeys<
  T extends object,
  U extends keyof T = keyof T
> = U extends any ? (T[U] extends null ? U : never) : never;

type SetDiffNull<T extends object, U extends object> = {
  [P in keyof T | keyof U]: P extends keyof T
    ? P extends keyof U
      ? null
      : MyMerge<T, U>[P]
    : MyMerge<T, U>[P];
};

type MyDiff<T extends object, K extends object> = Omit<
  MyMerge<T, K>,
  HelperGetNullKeys<SetDiffNull<T, K>>
>;

type MyDiff2<T, K> = {
  [P in Exclude<keyof T | keyof K, keyof T & keyof K>]: (T & K)[P];
};

type Answer_645 = MyDiff<Foo_645, Bar_645>;

type Answer_2_645 = MyDiff2<Foo_645, Bar_645>;

type FieldMapToTime = [
  string,
  [string, string],
  (string | [string, string])?
][];

/**
 * AnyOf
 */

//  !!! 0 extends {} ? true : false;
type FalseFy = 0 | false | "" | [] | Record<string, never | undefined | null>;
type MyAnyOf<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends FalseFy
    ? MyAnyOf<R>
    : true
  : false;

type Sample1 = MyAnyOf<[1, "", false, [], {}]>; // true
type Sample2 = MyAnyOf<[0, "", false, [], {}]>; // false

/**
 * isNever
 */
