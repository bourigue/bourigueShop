import { Injectable } from '@angular/core';
import {ProductsManagement} from "./products-management";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Product} from "../../../models/product";
import {catchError, Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class ProductsManagementService implements ProductsManagement{

  constructor(private  firestore: AngularFirestore) { }

    addProduct(product:Product) {
        this.firestore.collection("products").
        add(product).then(e=>{console.log("Product was added")}).catch(error=>console.log(error));

    }

    deleteProduct(product:Product) {

        }


    getAllProduct() :Observable<Product[]>{
       return  this.firestore.collection<Product>('products').valueChanges().pipe(
           catchError(error => {
               console.error('Error fetching products:', error);
               return []; // Return an empty array as a default value
           })
       );
    }

    getProductById() {
    }

    updateProduct(product: Product) {
      const productId=product.id;
      if(!productId){
          console.log("The Id of the product does' not exist");
      }else {
          const productRef=this.firestore.collection("products").doc(productId)
          productRef.update(product).then(e=>console.log("the product was addded")).catch(error=>{console.log("error whene update the product",error)});
      }


    }

}
