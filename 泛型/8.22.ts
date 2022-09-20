// 包含于  ⊆    extends
// 交集    ∩    &
// 并集    ∪    |
// 空集    ∅    never
// 全集    U    unknown

interface A {
  name: string;
  age: number;
}

interface B {
  name: string;
  height: number;
}

type C = A & B;

const option: C = {
  name: "1",
  age: 1,
  height: 1,
};

type D = A | B;

// 匹配模式
type Pop<T extends unknown[]> = T extends [...infer Rest, infer R] ? Rest : R;

type test = [1, 2, 34];

type PopTest = Pop<test>;

//
interface Pa {
  name: string;
  sex: number;
  weight: number;
}

type ClonePa = ["name", "sex"][number];

type Tip<T extends { length: number }> = T;

type NewTip = Tip<string>;

const b: Record<string, string>;
