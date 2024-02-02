// class Employee{
//    name:string
//   // phone:string
//     empId:string
//    // address:string
//    constructor(name:string,empId:string){
//        this.name=name
//        this.empId=empId;
//       //  this.empId=empid
//       //  this.address=address
//       console.log("Parent constructor");
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getInformation(employee) {
    console.log("empName:", employee.empName);
    console.log("empId:", employee.empId);
    console.log("phone:", employee.phone);
    employee.getInfo();
}
function getInfo(number) {
    console.log(typeof number);
    return number[1];
}
getInfo(['23', '234']);
getInfo([1, 3, 4, 5]);
console.log(getInfo([{ name: "Test" }, { name: "Test233" }]));
function merge(ob1, ob2) {
    console.log(__assign(__assign({}, ob1), ob2));
}
merge({ name: "Test" }, { email: "test@gmail.com" });
