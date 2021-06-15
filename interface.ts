interface Cat{
    name:string;
    weight:number;
    color?:string;//不作强制要求，可选值
    [propname:string]:any;
    say():string;//接口里不但可以储存属性，也可以储存方法
}

const getCat = (cat:Cat)=>{
    console.log(cat.name);
    console.log(cat.weight);
    console.log(cat.say());
}

const cat = {
    name:'xiaoba',
    weight:14,
    color:'orange',
    sex:'boy',
    say(){
        return "meow";
    }
};

getCat(cat);