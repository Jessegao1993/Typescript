/*
对象类型

1.对象类型
2.数组类型
3.类类型
4.函数类型
*/
//对象类型
const Cat:{color:string,weight:number} = {color:'orange',weight:14};
//数组类型
const kitties:string[]=['jesse','xiaoba'];
//类类型
class Person{};
const Bob:Person = new Person();
//函数类型(确定返回值)
const sayhello:()=>string = ()=>{return 'hello'};
