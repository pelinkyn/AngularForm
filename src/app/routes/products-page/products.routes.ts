import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductUpdateFormComponent } from "./product-update-form/product-update-form.component";
import { ProductAddedFormComponent } from "./product-added-form/product-added-form.component";

export const productsRoutes: Routes = [
{
path:"products",
component:ProductListComponent
},
{
  path:"products/update/:productId",
  component:ProductUpdateFormComponent
},
{
  path:"products/add",
  component:ProductAddedFormComponent
}
];
