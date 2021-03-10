class Person{
  constructor(name,age){
      this.name=name;
      this.age=age;
  }

  Display() {
      console.log(this.name +" "+this.age);
  }

}
class Employee extends Person{
   
    constructor(name,age,empId,dept){
        super(name,age);
        this.empId=empId;
        this.dept=dept;
    }
    Display() {
        console.log(this.name +" "+this.age+ " " + this.empId+" "+this.dept);
    }
}

class Developer extends Employee{
    constructor(name,age,empId,dept,project,designation){
        super(name,age,empId,dept);
        this.project=project;
        this.designation=designation;
    }
    Display() {
        console.log(this.name +" "+this.age+ " " + this.empId+" "+this.dept+" "+this.project+" "+this.designation);
    }
}

let a=new Person("abc",23);
 a.Display();
let b=new Employee("aa",12,123,"eng");
 b.Display();

let c=new Developer("abc",23,1222,"mean","vue","software-eng")

c.Display();
