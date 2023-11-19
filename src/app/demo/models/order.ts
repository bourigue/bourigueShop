import {Product} from "./product";

export interface Order {
    id?:string;
    ville?:string;
    address?:string;
    firstname?:string;
    lastname?:string;
    phoneNumber?:number;
    productId?:string;
    Quantity?:number;
    product?:Product;
    status?:string;
    dateCreation?:Number;
}
