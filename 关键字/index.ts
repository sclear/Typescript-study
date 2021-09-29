// 字面量类型
type size = "samll" | "big"

// 类型推断 赋值时推断基础类型number
let num = 1  // 'num'
// num = '3'

let anyType   // any

let arr = [1, '2', true]  // (number | string | boolean)[]



 // 类型保护
 // in typeof instanceof



 // 类型兼容  赋值时至少包含其类型
 type UserType = {
    name: string,
    sex: number
 }

 type userT<T> = {
     [P in keyof T]?: T[P]
 }

 function userTf(T) {

 }

 let userB: userT<UserType>

 const userA = {
     name: 'j',
     sex: 0,
     like: '🏀'
 }

 let u: keyof UserType

 const user: UserType = userA



//  交叉类型
interface Admin {
    type: 'win 10'
}
interface Books {
    price: '$ 1000'
}
let computer: Admin & Books


// 联合类型
let currentMonth: string | number

type c<K = currentMonth> = {
    [T in K]: K[T]
}


// 索引类型
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name];
}

// 映射类型
//Partial
type Dog = {
    age: number
    type: string
}
type partial<T> = {
    [K in keyof T]: T[K]
}


// 条件类型
type returnTypeMock<T extends (...arg: any)=> any> = T  extends (...arg: any)=> infer P ? P : never 

type ItestFn = ()=> number

function test(): number {
    return 0
}

type TestReturnType = returnTypeMock<ItestFn>

let t: TestReturnType = 21
