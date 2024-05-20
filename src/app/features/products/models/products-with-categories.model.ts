import { CategoryModel } from "../../categories/models/category-model";

export interface ProductsWithCategories{
  id:number,
  name:string,
  categoryName:CategoryModel
  supplierId?: number,
  categoryId?: number,
  quantityPerUnit?: string,
  unitPrice?: number,
  unitsInStock?: number,
  unitsOnOrder?: number,
  reorderLevel?: number,
  discontinued?: boolean,
}
