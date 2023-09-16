import {Observable} from "rxjs";
import {Product} from "../../../models/product";

export interface ProductsManagement {

    getAllProduct(): Observable<Product[]>;

    addProduct(product: Product);

    updateProduct(product: Product);

    deleteProduct(product: Product): Promise<any>;

    getProductById(id: string): Observable<Product>;

    UploadToFireStorage(pathName: string, file: File): any;

    deleteAllSelectedProduct(products: Product[]): Promise<any>;


}
