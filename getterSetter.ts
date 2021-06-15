//class的getter和setter
// class Sheep{
//     constructor(private _age:number){};
//     get age(){
//         return this._age;
//     };
//     set age(age:number){
//         this._age = age;
//     }
// }
// const mie = new Sheep(2);
// mie.age = 5;
// console.log(mie.age);

//static 静态属性：不需要实例化，用类名加方法名访问
class Animal{
    static bark(){
        return 'awu';
    }
}
console.log(Animal.bark());
