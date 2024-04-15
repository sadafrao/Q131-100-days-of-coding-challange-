// Q131
// in file main.ts
export class person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    print():void{
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
}