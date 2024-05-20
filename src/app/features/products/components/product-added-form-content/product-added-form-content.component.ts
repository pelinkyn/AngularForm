import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ProductModel } from '../../models/product-model';
import { CategoriesService } from '../../../categories/services/categories.service';
import { CategoryModel } from '../../../categories/models/category-model';

@Component({
  selector: 'app-product-added-form-content',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-added-form-content.component.html',
  styleUrl: './product-added-form-content.component.scss'
})
export class ProductAddedFormContentComponent implements OnInit {

  productFormGroup!: FormGroup;
  constructor(
    private productService: ProductsService,
    private categoryService:CategoriesService,
    private formBuilder: FormBuilder,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.createForm()
  }

  private createForm(): void {
    this.productFormGroup = this.formBuilder.group({
      name: [""],
      categoryId:[""],
      unitPrice:[""],
      unitsInStock:[""]
    })
  }

  addedForm() {
    let productModelData: ProductModel = {
      name: this.productFormGroup.value.name,
      categoryId:Number(this.productFormGroup.value.categoryId),
      unitPrice:this.productFormGroup.value.unitPrice,
      unitsInStock:this.productFormGroup.value.unitsInStock
    }

    this.productService.added(productModelData).subscribe((res) => {
      this.router.navigate(["/products"]);
    });
  }
}

