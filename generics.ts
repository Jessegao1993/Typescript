//泛型
//1.函数中的泛型（方法中的泛型）使用

//未使用泛型
// function join(first:string|number,second:string|number){
//     return `${first}$ {second}`;
// }
// join('jesse','gao');

//使用泛型
// function join<canshu>(first:canshu,second:canshu){
//     return  `${first}${second}`
// }
// join<string>('jesse','gao');

//使用多个泛型

function join<T,P>(first:T,second:P){
    return `${first}${second}`;
}
join<string,number>('hello',1);

//泛型中数组的使用
function myarr<T>(params:T[]){
    return params;
}
myarr<string>(['a','b','c']);