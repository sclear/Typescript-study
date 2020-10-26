//抽象行为 定义
interface Ipr{
    pring(msg:string):string;
}
interface Spr{
    spr(msg:string):string
}
//实现接口
class pr implements Ipr,Spr{
    pring(msg:string):string{
        return `打印${msg}成功`
    }
    spr(msg:string):string{
        return `打印${msg}成功`
    }
}

//对函数的约束
interface Imy{
    (a:string,b:string):string;
}
let fun1:Imy;
fun1 = function(a:string,b:string):string {
    return '1'
}
//对数组
interface ary{
    [index:number]:string
}
let arr1:ary = ['aa']
//json
interface Ijson{
    readonly name:string //只读
    age?:number //可选
}
let n:Ijson;
n = {
    name: '11',
    age:1
}
//约束作用

