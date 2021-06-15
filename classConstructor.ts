//测试
// class Animal{
//     public name:string;
//     constructor(name:string){
//         this.name = name;
//     }
// }
//简单写法
// class Animal{
//     constructor(public name:string){}
// }
//继承问题：子类constructor内必须有super()
// class Wang extends Animal{ 
//     constructor(public age:number){
//         super('jesse');
//     }
// }
// const dog = new Wang(8);
// console.log(dog.name);
// console.log(dog.age);