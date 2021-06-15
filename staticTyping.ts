// const count:number = 1;//基础静态类型。永远都是数字类型了，不可以改变了
// count.toString();//count变量可以使用number类型上所有的属性和方法
interface Cat{
    color:string;
    weight:number; 
}

const xiaoba:Cat ={//用接口自定义类型的对象
    color:'orange',
    weight:16,
}