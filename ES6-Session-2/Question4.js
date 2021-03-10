class Person{
    constructor(name,age){
        this.name=name
        this.age=age    
    }
    static func(){
    
        console.log("static function")
    }

}

let  a=new Person("aasakti",21);
Person.func();
