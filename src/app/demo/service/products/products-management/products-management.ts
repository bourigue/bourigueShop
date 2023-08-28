import {Observable} from "rxjs";
import {Product} from "../../../models/product";

export interface ProductsManagement {

    getAllProduct():Observable<Product[]>;
    addProduct(product:Product);
    updateProduct(product:Product);
    deleteProduct(product:Product);
    getProductById();
    UploadToFireStorage(pathName:string,file:File):any;

}
