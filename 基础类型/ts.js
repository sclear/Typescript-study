//起步
var sss = '123';
var show = true;
//array 
var list = [1, 2];
var ary = ['1', 3];
//枚举
var Weeks;
(function (Weeks) {
    Weeks[Weeks["boy"] = 0] = "boy";
    Weeks[Weeks["girl"] = 1] = "girl";
})(Weeks || (Weeks = {}));
var sex = Weeks.girl;
console.log(sex);
console.log(Weeks[0]);
console.log(Weeks['boy']);
//any
var x = '1';
x = 1;
//void 函数返回值
function hello() {
    // return 'ss'
    // 无返回值
}
function hello1() {
    return 'ss';
    // 无返回值
}
//undefined null
var xl = null;
// 联合类型
var xss;
//类型推论 number
var xs3 = 3;
//类型断言
var xx;
var sts = xx.length;
var sts1 = xx.length;
