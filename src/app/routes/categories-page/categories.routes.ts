import { Routes } from "@angular/router";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoryUpdateFormComponent } from "./category-update-form/category-update-form.component";
import { CategoryAddedFormComponent } from "./category-added-form/category-added-form.component";

export const categoriesRoutes: Routes =[
{
  path:"categories",
  component:CategoryListComponent
},

{
  path:"categories/update/:categoryId",
  component:CategoryUpdateFormComponent
},

{
  path:"categories/add",
  component:CategoryAddedFormComponent
}


];
