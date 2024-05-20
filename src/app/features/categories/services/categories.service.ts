import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryModel } from "../models/category-model";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  apiControllerUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) {}

  getList(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.apiControllerUrl);
  }

  getById(id:number):Observable<CategoryModel>{
    return this.http.get<CategoryModel>(`${this.apiControllerUrl}/${id}`)
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiControllerUrl}/${id}`);
  }

  update(data:CategoryModel):Observable<CategoryModel>{
    return this.http.put<CategoryModel>(`${this.apiControllerUrl}/${data.id}`,data);
  }

  added(data:CategoryModel):Observable<CategoryModel>{

   return this.http.post<CategoryModel>(this.apiControllerUrl,data)
  }
}
