import {Component, NgZone, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {ProductsManagementService} from "../../../service/products/products-management/products-management.service";
import {MessageService} from "primeng/api";
import {Table} from "primeng/table";
import {Categrory} from "../../../models/Category";
import {AuthenticationServiceService} from "../../../service/authentication/authentication-service.service";



@Component({
  selector: 'app-prodcuts-management',
  templateUrl: './prodcuts-management.component.html',
  styleUrls: ['./prodcuts-management.component.scss','./styles.css']
})
export class ProdcutsManagementComponent implements OnInit {
    products: Product[] = [];
    selectedProducts:Product[]=[];
    productDialog: boolean = false;
    loading: boolean = true;
    submitted: boolean = false;
    isProgress:boolean=false;
    deleteProdateDialog=false;
    deleteSelecteProductConfirm=false;

    product: Product = {};
    categorys: Categrory[] = [];
    lottieOptions: any;

    constructor(private ngZone: NgZone,private productService: ProductsManagementService, private messageService: MessageService,private auth:AuthenticationServiceService) {
    }

    ngOnInit(): void {
        this.productService.getAllProduct().subscribe(products => {
            setTimeout(() => {
                this.products = products;
                this.loading = false;
            }, 1000);
        });
        this.categorys = [{name: "Clothing"}, {name: "Jewelry & Watches"}, {name: "Fashion Accessories"}, {name: "Health & Beauty "}, {name: "Shoes"}]
        this.lottieOptions = {
            path: 'assets/demo/images/icon/data.json', // Replace with the path to your JSON data
            renderer: 'svg', // You can use 'canvas' or 'svg' as the renderer
            autoplay: true,
            loop: true,
        };
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    openNew() {
        this.clearProduct();
        this.productDialog = !this.productDialog;
    }
    deleteProduct(){
        this.isProgress=true;
      /*  setTimeout(() => {
            // Code to execute after 1 second
            this.ngZone.run(() => {
                // Put your code here
                this.deleteProdateDialog=false;
            });
        }, 10000);*/
        this.product={};
        this.productService.deleteProduct(this.product).then(value=>{
            this.isProgress=false;
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Product deleted',
                life: 3000
            });
        }).catch(error=>{
            this.isProgress=false;
            this.deleteProdateDialog=false;
            this.messageService.add({
                severity: 'error',
                summary: 'error',
                detail: 'Product not deleted',
                life: 3000
            });
        });
        this.clearProduct();

    }
    editProduct(product: Product) {
        this.product = {...product};
        this.productDialog = true;
    }

    saveProduct() {
        this.isProgress=true;
        console.log(this.product.image);

        this.submitted = true;
       console.log(this.product.name);
       if (this. isProductFilled()) {
            if (this.product.id) {
                this.productService.updateProduct(this.product);
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Updated',
                    life: 3000
                });
            } else {
                 // this.product.id = this.createId();
                 //this.product.code = this.createId();
                //this.product.image = 'product-placeholder.svg';
                //this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                this.productService.addProduct(this.product);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Created',
                    life: 3000
                });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
            this.isProgress=false;
        }
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }
    isProductFilled(): boolean {

        console.log(this.product.category);


        return !!(
            this.product.name?.trim() &&
            this.product.description?.trim()&&
            this.product.category?.trim()&&
            this.product.image?.trim()&&
            this.product.price &&
            this.product.quantity
        );
    }
    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
    async uploadImage(event: any) {

        const file = event.files[0];
        const filePath = `productImage/${file.name+ this.createId()}`;
        console.log(file);
        console.log(filePath);
        const url = this.productService.UploadToFireStorage(filePath, file);
        try {
            this.product.image= await this.productService.UploadToFireStorage(filePath, file);
            console.log('Download URL:', this.product.image);
        } catch (error) {
            console.error('Upload error:', error);
        }


    }


    clearProduct(){
        this.product={};
    }
    confirmDeleteProduct(product:Product){
        this.clearProduct();
        this.product=product;
        this.deleteProdateDialog=true;
    }
    confirmDeleteSelectedProducts(){
        this.deleteSelecteProductConfirm=true;
    }
    cancelConfirmDeleteSelectedProducts(){
        this.deleteSelecteProductConfirm=false;
    }
    deleteAllSelectedProdcut(){

        this.isProgress=true;
        this.productService.deleteAllSelectedProduct(this.selectedProducts).
            then(value=>{
                this.isProgress=false;
            this.deleteSelecteProductConfirm=false;

            this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'All Product selected was deleted',
                    life: 3000
                });
            }).catch(error=>{
            this.isProgress=false;
            this.deleteSelecteProductConfirm=false;

            this.messageService.add({
                severity: 'error',
                summary: 'error',
                detail: 'Product not deleted',
                life: 3000
            });
        });


    }
    checkInternetConnection(){
        return this.auth.isOnline();
    }

}
