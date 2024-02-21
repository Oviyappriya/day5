class Circle{
    constructor(radius=1.0,color="red"){
           this.radius=radius;
           this.color=color;
        }
         
    
    get radius(){
        return this._radius;
        
    }
    set radius(radius){
        this._radius=radius;
    }
    get color(){
        return this._color;
    }
    set color(color){
        this._color=color;
    }
    toString(){
        return `Circle [radius= ${this.radius},color= ${this.color}]`;
    }
    get area(){
        return Math.PI*this.radius*this.radius
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let value=new Circle(Math.abs(1.0),"red");

console.log(Math.abs(value.radius));
console.log(value.color);
console.log(value.toString());
console.log((value.area).toFixed(2));
console.log((value.circumference).toFixed(2));