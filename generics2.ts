//类中使用泛型
//1. 未使用泛型
// class selectCat{
//     constructor(private cats: string[]|number[]){}
//     getName(index:number):string|number{
//         return this.cats[index];
//     }
// }
// const buycat = new selectCat(['a','b','c']);
// console.log(buycat.getName(2));

//2. 使用泛型
// class selectCat<T>{
//     constructor(private cats: T[]){}
//     getName(index:number):T{
//         return this.cats[index];
//     }
// }
// const buycat = new selectCat<string|number>(['a','b','c']);
// console.log(buycat.getName(2));

//泛型的约束
// <T extends string|number >