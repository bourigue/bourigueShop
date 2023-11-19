import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductsManagementService} from "../../service/products/products-management.service";
import {SelectItem} from "primeng/api";
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss','./style.css']
})
export class LandingPageComponent implements  OnInit{
  products:Product[]=[];
  productsOrj:Product[]=[];
  sortOptions:SelectItem[]=[];
  sortOrder: number = 0;
  sortField: string = '';
  sortCategoryOptions: SelectItem[]=[];
  sortCategoryOrder: number = 0;
  sortCategoryField: string = '';
  selectedCategory: any; // Selected category
  dataView: DataView;



    constructor(private productServices:ProductsManagementService, private router: Router) {
}

     ngOnInit() {
         this.productServices.getAllProduct().subscribe(products => {
             setTimeout(() => {
                 this.products = products;
                 this.productsOrj= products;
             }, 1000);
             });
         this.sortOptions = [
             { label: 'Price High to Low', value: '!price' },
             { label: 'Price Low to High', value: 'price' }
         ];
         this.sortCategoryOptions = [
             { label: 'Health & Beauty', value: 'Health & Beauty' },
             { label: 'Fashion Accessories', value: 'Fashion Accessories' },
             { label: 'Jewelry & Watches', value: 'Jewelry & Watches' },
         ];
     }

    navigateToProductDetails(id: string) {
        console.log(id);
        this.router.navigate(['/productDetails', id]);
      }
    onSortChange(event: any) {
        const value = event.value;
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
    onCategoryChange(event: any): void {
        // Update the filter criteria when the category changes
        this.filterProductsByNameAndCategory("",event.value);
    }
    filterProductsByNameAndCategory(name: string, category: string): void {
        // Filter the products array based on the provided name and category
        this.products = [...this.productsOrj.filter(product => {
            return (product.category.toLowerCase() === category.toLowerCase());
        })];
    }

}
