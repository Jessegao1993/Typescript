//基础类型：数组中只有一种基本数据类型的情况
const arr:number[] = [1,2,3,4];
const arr2:string[] = ['jesse','xiaoba'];

//数组元素有多种基本数据类型的情况
const arr3:(number|string)[] = [1,2,3,'jesse','xiaoba'];

//数组中含有对象类型
const people:{name:string,age:number}[] = [
    {name:'Abby',age:17},
    {name:'Bob',age:18},
    {name:'Candy',age:19}
];
//可以使用类型别名,也可以用类
type human = {name:string,age:number};
const forks:human[] = [
    {name:'Abby',age:17},
    {name:'Bob',age:18},
    {name:'Candy',age:19}
];

class Cats{
    name:string;
    weight:number;
}
const meow:Cats[]=[
    {name:'huahua',weight:10},
    {name:'miaomiao',weight:11}
]
