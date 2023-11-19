import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { Order } from 'src/app/demo/models/order';
import { OrdersService } from 'src/app/demo/service/orders/orders.service';

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
  styleUrls: ['./orders-management.component.scss','./style.css'],

})
export class OrdersManagementComponent implements OnInit{
  orders:Order[]=[];
  loading: boolean = true;
  statusType=[
    { label: 'prepared', value: 'prepared' },
    { label: 'shipped', value: 'shipped' },
    { label: 'paid', value: 'paid' },
    { label: 'delivered', value: 'delivered' },
    { label: 'returned', value: 'returned' },
    { label: 'pending', value: 'pending' },
    { label: 'awaiting', value: 'awaiting' },
    { label: 'refused', value: 'refused' },
    { label: 'cancled', value: 'cancled' },
  ];

  constructor(private ordersServices:OrdersService,private message:MessageService){}
  ngOnInit(): void {
    //get all orders
    this.getAllOrders();
    //get all status type
    //this.putAllStatus();

  }

  getAllOrders(){
    this.ordersServices.getAllOrders().subscribe((v)=>{

      setTimeout(() => {
        this.orders = v;
        console.log("success",this.orders)

        this.loading = false;
    }, 1000);
    })
    }

updateStatus(order:Order,event){

    console.log(order.id);
    console.log(event.value);
    this.ordersServices.updateStatus(event.value,order.id).then((v)=>{
      console.log(v)
      this.message.add({
        severity: 'success',
        detail:"the order was upadted",
      })
    }).catch((error)=>{
      console.log(error)
      this.message.add({
        severity: 'error',
        detail:"contact the adminsrator",
      })
    });
}

}
