// 对集合的编程,  对类型的编程

"1 返回传入值";
function retArg<T>(arg: T): T {
  return arg;
}

("2 同字段接口面对改变其可选属性");
interface IisHave {
  name: string;
  sex: "man" | "woMen";
}
// 或许字段会非常多 当面临突发的都变成可选时, 重写是最呆最容易出现误差的做法
interface IisHaveC {
  name?: string;
  sex?: "man" | "woMen";
}

type InewIsHave<T> = {
  [P in keyof T]?: T[P];
};

// 这看起来比较nice 抽象一下接口InewIsHave
("  function InewIsHave(name) { return name }  ");
("  这看起来挺像  ");
const isHave: InewIsHave<IisHave> = {
  sex: "man",
};

("3 接口泛型");
interface IinterFace<T> {
  name: T;
}

("4 实现获取泛型T上的size属性");
interface Isize {
  size: number;
}
function getT<T extends Isize>(obj: T): T["size"] {
  console.log(obj.size);
  return obj.size;
}

("5 集合类");

const aryType: Array<string | number> = ["1", 1];

// 特殊的 T={} T=any ... 类似ES6
type Lucifer<T = {}> = LeetCode<T>;
type LeetCode<T> = {
  name: T;
};

const LeetCode: LeetCode<string> = { name: "1" }; //ok
const Lucifer: Lucifer<string> = { name: "1" }; //
const lucifer1: Lucifer = { name: 1 }; // 应用了any

type Is<T> = T & { children?: number };
const newObj: Is<Isize> = {
  children: 1,
  size: 2,
};

("6 函数调用传参");

function names<T>(arg: T): T {
  return arg;
}
names<string>("1");

("7 默认参数");
interface IdefArgs<T = string> {
  name: T;
}
const defArgs: IdefArgs = {
  name: "1",
};
const defArgs1: IdefArgs<number> = {
  name: 1,
};

interface Iary {}
const aryString: string[] = ["1"];

let a: string = "lucifer"; // 我们没有给 a 声明类型， a 被推导为string
a.toString();

("...数组的...");
type P = [string, number];
let arys: P = ["1", 1];
type Q = [...P, number];
let arys1: Q = ["1", 1, 11];

// 小小的操作
interface Seal {
  name: string;
  url: string;
}
interface API {
  user: { name: string; age: number; phone: string };
  seals: { seal: Seal[] };
}
const api = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then((res) => res.json());
};

interface Api {
  set1(name: string, num: number): Promise<string>;
}
const apis: Api = {
  set1(name, num) {
    return new Promise((rs, rj) => {
      if (num) {
        rs(name);
      }
    });
  },
};

interface ItestKeyof {
  name: string;
  sex: number;
  age: number;
}

function Testko<T extends object, K extends keyof T>(obj: T, keys: K): T[K] {
  return obj[keys];
}

function testNeverB(): never {
  throw new Error("007");
}

let testNeverA: 1 = testNeverB();
