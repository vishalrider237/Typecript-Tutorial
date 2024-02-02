class Employee{
   name:string
  // phone:string
    empId:string
   // address:string
   constructor(name:string,empId:string){
       this.name=name
       this.empId=empId;
      //  this.empId=empid
      //  this.address=address
      console.log("Parent constructor");
      
   }
   displayName(){
      console.log(`My Name is ${this.name}`);
      
   }
}

class Manager extends Employee{
   managerTask:string;
   constructor(name:string,empId:string,task:string){
      super(name,empId )
      this.managerTask=task;
      console.log("Child constructor");
      
      
   }
   displayNameWithTask(): void {
       this.displayName()
       console.log(`task is ${this.managerTask}`);
       
   }
}
class Developer extends Employee{
   technology:string;
   project:string
   DisplayNameWithProject(){
      this.displayName()
      console.log("Project details is ",this.project);
      
   }
}
let emp=new Manager("Harsh","2345","TEACHING jAVA")
emp.displayNameWithTask()
let androidDev=new Developer();
androidDev.name="RAM"
androidDev.address="lUCKNOW"
androidDev.phone="098766";
androidDev.project="Android social site"
androidDev.technology="Flutter"

androidDev.DisplayNameWithProject()




class Car{
   
    
    protected model:string;
    private color:string;
 
    
     constructor(model:string='Default Value',color:string){
        this.model=model;
        this.color=color;
        console.log("Calling constructor");
        
     }
   //       constructor(color:string){
   //    this.color=color;
   //    console.log("Created car object");

   // }
   
     getModelNumber():string{
        console.log("Getting Model Number")
        return this.model;
     }
     start(){
      console.log("Starting Car");
      this.displayInternals()
     }
     sumOfTwoNumber(a:number,b:number):number{
      console.log("Adding Two Number");
      return a+b;
      
     }
     private displayInternals(){
      console.log("Internal display");
      
     }
}
class childCar extends Car{
   constructor(color:string,model:string){
      super(color,model)
   }
   displaChild():void{
      console.log("Displaying model from child ",this.model);
      
   }
}
let car1=new childCar("Black","NEXON")
car1.displaChild()
let car1:Car=new Car("TATA MOTOR","WHITE");
console.log(car1);
let modelNumber=car1.getModelNumber();
console.log(modelNumber);

let car2:Car=new Car("TATA NEXON","BLACK")
car2.color="WHITE"
car2.model="TATA NEXON";
console.log(car2);

let car1:Car=new Car("WHITE");
car1.start();
let x=car1.sumOfTwoNumber(23,56);
 console.log("sum is:",x);
 

class Sum{
 private  a:number;
  private b:number
   constructor(a:number,b:number){
      if(a<=0 || b<=0){
         console.log("Negative values not allowed");
         throw new Error("Error in creating Object:No Negative values allowed")
         
      }
      this.a=a;
      this.b=b;
      console.log("creating sum object");
      
   }
   set setA(a:number){
      if(a<0){
         console.log("Only Positive value alllowed");
         return
      }
        this.a=a;
   }
   set setB(b:number){
      if(b<0){
         console.log("Only positive value is allowed");
         return
         
      }
      this.b=b;
   }
   get getA(){
      console.log("Validatingg A....");
      
      return this.a;
   }
   get getB(){
      console.log("Validatingg B....");
      return this.b;
   }
   sum(){
      return this.a+this.b;
   }
   display(){
      console.log("Value of a is:",this.a);
      console.log("Value of b is:",this.b);
      
      
   }
}

let sum1:Sum=new Sum(-12,56)
sum1.setA=-12 

sum1.display()
console.log(sum1.sum());

}


 abstract class Animal{
   abstract eat():string;
   display(){
      console.log("This is abstract method of abstract class");
      
   }
 }
 class Dog extends Animal{
   eat(): string {
       return "Dog is eating";
   }
 }

 let anim=new Dog();
 anim.display()
 console.log(anim.eat());
 
interface Employee{
   empName:string;
   empId:string;
   phone:number;
   getInfo:()=>string;
}
function getInformation(employee:Employee){
    console.log("empName:",employee.empName);
    console.log("empId:",employee.empId);
    console.log("phone:",employee.phone);
    employee.getInfo()
    
}
let ob={
   empName:"Vishal Pandey",
   empId:"12334",
   phone:1234,
   getInfo:()=>{
      return "this is information from object";
   }
}
getInformation(ob)
class Manager implements Employee{
   empName: string;
   empId: string;
   phone: number;
   constructor(empName:string,empId:string,phone:number){
      this.empName=empName
      this.empId=empId;
      this.phone=phone
   }
   getInfo(): string{
    return this.empName+" "+this.empId
   }

}
// let manager=new Manager("Vishal","1234",2333)
// getInformation(manager)

interface MyType{
   name:String
}
interface MyType1{
   email:string
}
function getInfo<T>(number:T[]){
   console.log(typeof number);
   
   return number[1];
}
getInfo<string>(['23','234'])
getInfo<number>([1,3,4,5])
console.log(getInfo<MyType>([{name:"Test"},{name:"Test233"}]));
function merge<U,V>(ob1:U,ob2:V){
   console.log({
      ...ob1,...ob2
   });
   
}
merge<MyType,MyType1>({name:"Test"},{email:"test@gmail.com"})
