// 提取Promise<T> 类型
type GetValue<T> = T extends Promise<infer R> ? R : never;

type PromiseType = Promise<number[]>;

type res = GetValue<PromiseType>;

type IfAny<T, K, U> = 0 extends 1 & T ? K : U;

type Op = IfAny<unknown, number, string>;

// 数组类型的模式匹配
type Pops<T extends unknown[]> = T extends [...infer Rest, infer B]
  ? [...Rest]
  : never;
