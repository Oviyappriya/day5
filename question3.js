//Write a “person” class to hold all the details.
class Person{
    constructor(name,age,firstName,lastName,email,fathername,mothername){
        this.name=name;
        this.age=age;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.fathername=fathername;
        this.mothername=mothername;
    }
}
let person1=new Person("oviya","25","oviya","priya","oviyappriya.a.s@gmail.com","siva","kavi");
console.log(person1.name);
console.log(person1.age);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.email);
console.log(person1.fathername);
console.log(person1.mothername);