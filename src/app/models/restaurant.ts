import { Dish } from './dish';

export class Restaurant {
    constructor(public id: number, public name: string,public type: string,public location:string,public contact:string,public accessed:number,public available:string,public image:string,public dishes: Array<Dish>){

    }
}