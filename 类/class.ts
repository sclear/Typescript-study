class person{
    name: string
    age: number
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }
}
let p = new person('x',1)
//类的定义

class son extends person{
    sex: string
    constructor(name:string,age:number,sex:string){
        super(name,age)
        this.sex = sex
    }
}
//继承

interface pri{
    pr();
}
interface pris extends pri{
    prs()
}
class newRegs implements pris{
    pr() {
        console.log(1)
    }
    prs() {}
}
//接口继承 实现类


class foo{
    public age: number
    private name: string
    protected sex: number
    constructor(age:number,name:string,sex:number) {
        this.age = age
        this.name = name
        this.sex = sex
    }
}
let foop = new foo(1,'2',1)
console.log(foop.age)
// console.log(foop.name)
// console.log(foop.sex)
//访问修饰符 public 共有  private 私有(自身类) protected 受保护的(子类或自身类可访问)

class animal{
    static fn() {

    }
    static names:number = 1;
}
//添加静态方法与ES6一致


//抽象类是提供给其他类的基类 不能被实例
//抽象方法必须包含在抽象类中 抽象类可以包含抽象方法或非抽象方法
//子类继承抽象类 必须实现抽象方法
abstract class dogs{
    abstract eat()
    run() {}
}
class dog extends dogs{
    eat() {}
}