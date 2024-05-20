import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { ProductModel } from "../models/product-model";
import { CategoryModel } from "../../categories/models/category-model";
import { CategoryJoinModel } from "../../categories/models/category-join-model";

@Injectable({
  providedIn :"root",
})
export class ProductsService{
  apiControllerUrl =`${environment.apiUrl}/products`;
  apiControllerUrl2 =`${environment.apiUrl}/categories`;

  constructor(private http:HttpClient){}

  getList():Observable<ProductModel[]> {
   return this.http.get<ProductModel[]>(this.apiControllerUrl)
  }


  getById(id:number):Observable<ProductModel>{
    return this.http.get<ProductModel>(`${this.apiControllerUrl}/${id}`)
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiControllerUrl}/${id}`);
  }

  update(data:ProductModel):Observable<ProductModel>{
    return this.http.put<ProductModel>(`${this.apiControllerUrl}/${data.id}`,data);
  }

  added(data:ProductModel):Observable<ProductModel>{

    return this.http.post<ProductModel>(this.apiControllerUrl,data)
   }

   productsWithCategories():Observable<any[]>{
    const products= this.http.get<ProductModel>(this.apiControllerUrl)   ;
    const categories= this.http.get<CategoryJoinModel>(this.apiControllerUrl2)   ;
    return forkJoin([products,categories]);
  }
}
