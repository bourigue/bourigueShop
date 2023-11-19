import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsManagementService} from "../../service/products/products-management.service";
import {Product} from "../../models/product";
import {Order} from "../../models/order";
import { OrdersService } from '../../service/orders/orders.service';
import { MessageService } from 'primeng/api';
import { AnimationBuilder, AnimationPlayer, animate, style } from '@angular/animations';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss','./style.css'],
  providers: [MessageService],
  encapsulation:ViewEncapsulation.None


})
export class ProductDetailsComponent implements OnInit{
  product:Product={};
  order:Order={};
  isSubmitted:boolean=false;
  codeProduct:string;
  myThumbnail:string;
  myFullresImage:string;
  public buttonState = 'start';
  private player: AnimationPlayer;
  constructor(private animationBuilder: AnimationBuilder,private messageService: MessageService,private ordersService:OrdersService,private route: ActivatedRoute,private servcieProductManagement:ProductsManagementService){}
  ngOnInit() {
      this.getIdFromRoute();
      this.order.Quantity=1;
      this.createAutoAnimation();
  }
  private createAutoAnimation() {
    const factory = this.animationBuilder.build([
      style({ transform: 'translateX(0)' }),
      animate('0.1s', style({ transform: 'translateX(5px)' })),
      animate('0.1s', style({ transform: 'translateX(-10px)' })),
      animate('0.1s', style({ transform: 'translateX(0) rotate(2deg)' })),
      animate('0.1s', style({ transform: 'translateX(0) rotate(-2deg)' })),
      animate('0.1s', style({ transform: 'translateX(0) rotate(0deg)' })),
    ]);

    this.player = factory.create(document.querySelector('.move-button'));

    setInterval(() => {
      this.toggleButtonState();
      this.player.play();
    }, 4000);
  }

  toggleButtonState() {
    this.buttonState = this.buttonState === 'start' ? 'end' : 'start';
  }





  getIdFromRoute(){
      this.route.params.subscribe(params => {
          this.codeProduct=params['id'];
          this.getProduct();
      });
  }
  getProduct(){
       this.servcieProductManagement.getProductById(this.codeProduct).subscribe({
               next:(value)=>{
                   this.product=value;
                   this.myFullresImage=this.product.image;
                   this.myThumbnail=this.product.image;
                   
                   console.log("product details was get it:",this.product.name);
               },
               error:(error)=>{
                   console.log("product details Error:",error);
               }
           }
       )
   }
   incQt(){
      return this.order.Quantity++;
   }
   decQt(){
      return (this.order.Quantity==1)?0:this.order.Quantity--;
   }
  inputValidation(){
      return !(!this.order.address || !this.order.phoneNumber || !this.order.firstname || !this.order.lastname);
  }
  clearIput(){
      this.order={};
      this.order.Quantity=1;
  }
  sendOrder(){
      this.isSubmitted=true;
      this.order.productId=this.product.id;
     if(this.inputValidation()){
          console.log(this.order);
          this.ordersService.addOrder(this.order).then((v)=>{
          
            console.log("orders was send it");
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Order was send it',
                life: 3000
            });  this.isSubmitted=false;
            this.clearIput();
          }).catch((error)=>{

               this.messageService.add({
                severity: 'error',
                summary: 'error',
                detail: 'Order was not send it',
                life: 3000
            });
            console.log("error",error);
          })
      }else{
          console.log("invalid input");
      }
  }


}
