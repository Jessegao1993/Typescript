//类的基本使用
// class Person{
//     country="I am from US";
//     say(){
//         return this.country;
//     };
//     bye(){
//         return "bye";
//     }
// }

//类的继承
// class Boy extends Person{
//     hey(){
//         return "Hello";
//     };
//     say(){
//         return "I am from China";
//     };
//     bye(){
//         return super.bye()+" see you next time.";
//     }
// }

//类的重写：子类可以重新编写父类里的代码，见boy类
//super关键字的使用

// const Jack = new Boy();
// console.log(Jack.say());
// console.log(Jack.hey());
// console.log(Jack.bye());