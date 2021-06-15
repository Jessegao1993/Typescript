//给函数的返回值加上类型注解
function getTotal(a:number,b:number):number{//函数返回值规定为number类型
    return a+b;
}

const all = getTotal(1,2);
//函数无返回值时定义方法
function sayHi():void{//函数无返回值时定义返回值为void
    console.log("hi");
}
//never返回值类型
//如果一个函数是永远也执行不完的，就可以定义返回值为never。如抛出异常函数和死循环函数

//如果函数的参数是一个对象时
function add({one,two}:{one:number,two:number}):number{
    return one+two;
}