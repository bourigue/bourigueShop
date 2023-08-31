import { Injectable } from '@angular/core';
import {ProductsManagement} from "./products-management";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Product} from "../../../models/product";
import {catchError, finalize, Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class ProductsManagementService implements ProductsManagement{


  constructor(private  firestore: AngularFirestore,private firestorage:AngularFireStorage) { }

    addProduct(product:Product) {

        this.firestore.collection("products").
        add(product).then((ref)=>{
            console.log("Product was added");
            this.firestore.collection("products").doc(ref.id).update({ id: ref.id })
        }).catch(error=>console.log(error));

    }

    deleteProduct(product:Product) {

         this.firestorage.refFromURL(product.image).delete().subscribe(
             value => {
                 console.log("the image was deleted "+value);
                 this.firestore.collection("products").doc(product.id).delete().then(value=>{
                     console.log("the product was deleted "+value);

                 });
             },
             error=>{
                 console.log("the image not deleted "+error)
             }
         );


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

    UploadToFireStorage(filePath: string, file: File): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const fileRef = this.firestorage.ref(filePath);
            const uploadTask = this.firestorage.upload(filePath, file);

            uploadTask.snapshotChanges().pipe(
                finalize(() => {
                    fileRef.getDownloadURL().subscribe(
                        downloadURL => {
                            console.log('File available at', downloadURL);
                            resolve(downloadURL);
                        },
                        error => {
                            console.error('Error getting download URL:', error);
                            reject(error);
                        }
                    );
                })
            ).subscribe();
        });
    }




}
