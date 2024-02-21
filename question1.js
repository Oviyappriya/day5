class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        

    }}
let person1=new Movie("Casino Royale","Eon Productions","PG13");
let person2=new Movie("Casino Royale","Eon Guards");

console.log(person1.title);
console.log(person1.studio);
console.log(person1.rating);
console.log(person2.rating);