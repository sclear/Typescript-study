function foos(name:number,sex?:string):void {

}
//? 可选

// 函数的重载
function fns(sex:string):void
function fns(name:number):void
function fns(age:any):void {}

// 区分箭头
interface Ifn {
    (name: string): string
}
const fn1: Ifn = (name: string): string => name

const fn2: (name: string) => string = (name:string): string => name