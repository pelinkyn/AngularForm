import { CategoryModel } from "../../categories/models/category-model";

export interface ProductModel{
  id?: number,
  supplierId?: number,
  categoryId?: number,
  quantityPerUnit?: string,
  unitPrice?: number,
  unitsInStock?: number,
  unitsOnOrder?: number,
  reorderLevel?: number,
  discontinued?: boolean,
  name?: string,
  category?:CategoryModel
}
