//起步
let sss:string = '123'

let show:boolean = true

//array 
let list:number[] = [1,2]
let ary:[string,number] = ['1',3]

//枚举
enum Weeks{ boy, girl }
let sex:Weeks = Weeks.girl
console.log(sex)
console.log(Weeks[0])
console.log(Weeks['boy'])

//any
let x:any = '1'
x = 1

//void 函数返回值
function hello():void {
    // return 'ss'
    // 无返回值
}
function hello1():string {
    return 'ss'
    // 无返回值
}

//undefined null
let xl:null = null


// 联合类型
let xss:number | string | boolean;

//类型推论 number
let xs3 = 3;

//类型断言
let xx:number | string | boolean;
let sts:number = (<string>xx).length
let sts1:number = ( xx as string ).length


// 锁定键值选择
interface Ipoint {
    x: 'x' | 'y'
}

const obj: Ipoint = {
    x: 'x'
}
