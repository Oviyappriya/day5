//write a class to calculate the Uber price.
class uber{
    constructor(){
        this.basefare=30;
        this.costperkilometer=15
        this.costpertime=2.5
        this.bookingfees=30
    }
    calculatePrice(distance,time){
        const cost=this.costperkilometer*distance+this.costpertime*time
        const totalprice=this.basefare+cost+this.bookingfees
        return totalprice
        
    }
}
let person1=new uber();
let distance=4.0
let time=10
const estimate= person1.calculatePrice(distance, time);
console.log(estimate);