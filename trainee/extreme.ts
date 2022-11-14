/**
 * Get Readonly Keys
 */

type Test = { readonly name: string } extends { name: string } ? 1 : 0;

type x10 = <T extends number>() => T extends number ? number : string;
type y10 = <G extends string>() => G extends number ? string : number;

// type GetReadOnlyKeys =
type A1 = {
  name: string;
  sex: number;
};
type B1 = {
  name: string;
};

type C1 = A1 extends B1 ? 1 : 0;

let Ao: A1 = {
  name: "1",
  sex: 2,
};

let Bo: B1 = {
  name: "3",
};

type Q1<T> = T extends "1" | "2" | "4" ? true : false;

type Q2 = Q1<"1" | "2" | "3">;

let q: Q2 = false;
