import {Component, OnInit} from '@angular/core';
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
    productDialog: boolean = false;
    loading: boolean = true;
    submitted: boolean = false;
    isProgress:boolean=false;
    deleteProdateDialog=false;
    product: Product = {};
    categorys: Categrory[] = [];

    constructor(private productService: ProductsManagementService, private messageService: MessageService,private auth:AuthenticationServiceService) {
    }

    ngOnInit(): void {
        this.productService.getAllProduct().subscribe(products => {
            setTimeout(() => {
                this.products = products;
                this.loading = false;
            }, 1000);
        });
        this.categorys = [{name: "Clothing"}, {name: "Jewelry & Watches"}, {name: "Fashion Accessories"}, {name: "Health & Beauty "}, {name: "Shoes"}]
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
        this.productService.deleteProduct(this.product).then(value=>{
            this.isProgress=false;
            this.deleteProdateDialog=false;
        }).catch(error=>{
            this.isProgress=false;
            this.deleteProdateDialog=false;
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
    async uploadImage(event: any) {

        const file = event.files[0];
        const filePath = `productImage/${file.name}`;
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
    checkInternetConnection(){
        return this.auth.isOnline();
    }

}
