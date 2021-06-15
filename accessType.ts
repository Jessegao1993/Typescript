//public  访问属性可以在类的内部和外部被调用 
//private 访问属性只允许再类的内部被调用，外部不允许调用
//protected 允许在类内及继承的子类中使用
// class Person {
//     public name:string = "gaoqi";
//     sayhi(){
//         console.log(this.name+' hi'); 
//     };
//     protected sex:string = "boy";
//   }
 
// class Boy extends Person{
//     public saybye(){
//         console.log('bye '+this.sex+'!');
//     }
// }
//   const person = new Person();
//   person.name = "jessegao";
//   const xiaoba = new Boy();

//   console.log(person.name);
//   person.sayhi();
//   xiaoba.saybye();