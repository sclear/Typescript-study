// 从一个数据集获取某一个项 可以对该数据进行迭代
// 迭代器是特殊对象 该接口中存在一个函数next,调用next将会返回{value: any, done: boolean}
// 迭代器内部会保存一个正在指向当前集合某项的位置，迭代器一旦创建 迭代对象就可以通过重复调用next显示迭代

'实现一个迭代器'

interface Iiterator {
    next: ()=> {
        value: any
        done: boolean
    }
}

function createIterator(array: any[]): Iiterator {
    let index = 0
    return {
        next() {
            if(array.length >= index) {
                return {
                    value: array[index],
                    done: false
                }
            }else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

// 并不是所有对象都实现了迭代器 仅仅有symbol.iterator属性时 才能够被迭代