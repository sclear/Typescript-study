// infer条件推断类型

type Flatten<T> = T extends Array<infer U> ? U : never

type T0 = [string, number]
type T1 = Flatten<T0> // string | number

type Flate<T> = T extends infer U ? U : never

type Casel<T> = T extends (infer U)[] ? U : string

// use
type TypeCase = Casel<number>    // string
type TypeCase1 = Casel<number[]> // number


interface Logger {
    time: number;
    asyncLog:(msg: string) => Promise<string>;
    syncLog:(msg: string) => string;
  }
  
  type Translate<T> = {
      [key in keyof T]: T[key] extends Function ? key : never
  }[keyof T]
  
  type Itanslate = Translate<Logger>
  const logger: Itanslate = 'asyncLog'


  // infer定义变量 分发类型，多用于条件语句中