//类型注解
let count:number;
count = 4;
//类型推断
let n = 5434;

//如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
const one = 1
const two = 2
const add = one+two;//类型已推断
//如果 TS 无法分析变量类型的话， 我们就需要使用类型注解
function getTotal(a:number,b:number){//a,b需要使用类型注解
    return a+b;
}
const total = getTotal(1,2);