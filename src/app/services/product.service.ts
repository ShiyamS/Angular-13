import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, catchError, map, throwError } from 'rxjs';

interface Product {
  id?: string;
  productDesc: string;
  productName: string
  productPrice: string;
}


@Injectable({ providedIn: "root" })
export class ProductService {

  errorDeletingAProduct = new Subject<string>();

  constructor(private http: HttpClient) { }

  // To create a Product
  createProduct(data: { productName: string, productDesc: string, productPrice: string }) {
    const headersHttp = new HttpHeaders({ 'myHeaders': 'Manage Products' });
    return this.http.post<{ name: string }>('https://angularhttprequest-638f4-default-rtdb.firebaseio.com/products.json', data, { headers: headersHttp });
  }

  // To get all Products
  allProducts() {
    return this.http.get<{ [key: string]: Product }>('https://angularhttprequest-638f4-default-rtdb.firebaseio.com/products.json')
      .pipe(map((res) => {
        let products = [];
        for (const key in res) {
          products.push({ ...res[key], id: key })
        }
        return products;
      }), catchError((error) => {
        // perform an db action to stor the error
        return error
      }))
    // , throwError(() => {
    //   return new Error('test')
    // })

  }

  // To delete a product
  deleteAProd(productId: string) {
    const url = `https://angularhttprequest-638f4-default-rtdb.firebaseio.com/products/${productId}.json`;
    console.log(url)
    // this.http.delete(url).subscribe((res: any) => {
    //   console.log(res, "Product Deleted !")
    // })
    this.http.delete(url).subscribe({
      next: (res) => console.log(res, 'Product Deleted !'),
      error: (error) => this.errorDeletingAProduct.error(error.message)
    })

  }

  // Delete all Product
  deleteAllProd() {
    this.http.delete('https://angularhttprequest-638f4-default-rtdb.firebaseio.com/products.json').subscribe();
  }

  // Update a Product
  updateAProd(id: string, data: { productName: string; productDesc: string; productPrice: string; }) {
    const url = `https://angularhttprequest-638f4-default-rtdb.firebaseio.com/products/${id}.json`;
    return this.http.put(url, data);
  }
}
