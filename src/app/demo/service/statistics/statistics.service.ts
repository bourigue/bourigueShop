import { Injectable } from '@angular/core';
import firebase from "firebase/compat";
import Firestore = firebase.firestore.Firestore;
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private firestore:AngularFirestore) { }

    getNumberOfOrders() {
        return this.firestore.collection("orders").get().toPromise()
            .then(snapshot => {
                // Get the number of orders
                return snapshot.size;
            })
            .catch(error => {
                console.error("Error getting number of orders: ", error);
                throw error; // You can handle the error as needed
            });
    }
    getNumberOfProducts() {
        return this.firestore.collection("products").get().toPromise()
            .then(snapshot => {
                // Get the number of orders
                return snapshot.size;
            })
            .catch(error => {
                console.error("Error getting number of orders: ", error);
                throw error; // You can handle the error as needed
            });
    }

}
