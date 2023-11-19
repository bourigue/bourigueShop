import { Injectable } from '@angular/core';
import { Order } from '../../models/order';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, forkJoin, from, map, switchMap } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsManagementService } from '../products/products-management.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private firestore:AngularFirestore,private productsMService:ProductsManagementService) { }

  addOrder(order: Order) {
     order.dateCreation= Date.now();
    return new Promise((resolve, reject) => { // Added () after resolve,reject
      this.firestore.collection("orders").add(order).then((value) => {
        this.firestore.collection("orders").doc(value.id).update({ id: value.id });
        resolve(value);
      }).catch((error) => {
        reject(error);
      });
    });
  }
  
getAllOrders(): Observable<Order[]> {
  return this.firestore.collection<Order>('orders').valueChanges().pipe(
    switchMap((orders: Order[]) => {
      const productObservables = orders.map((o: Order) =>
        this.productsMService.getProductById(o.productId).pipe(
          map((product) => {
            o.product = product;
            return o;
          })
        )
      );
      return forkJoin(productObservables);
    })
  );
}
  
  updateOrder(){
    
  }
  
  updateStatus(status:string,idOrder:string){

    return this.firestore.collection("orders").doc(idOrder).update({
      "Status":status
    }).then((v)=>v).catch((error)=>error);
  }
}
