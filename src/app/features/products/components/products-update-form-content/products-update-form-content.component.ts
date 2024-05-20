import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-update-form-content',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './products-update-form-content.component.html',
  styleUrl: './products-update-form-content.component.scss'
})
export class ProductsUpdateFormContentComponent implements OnInit {
  productId: number = 0;
  productFormGroup!: FormGroup;
  productById!: ProductModel;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService,
    private change: ChangeDetectorRef,
  ) {}


  ngOnInit(): void {
    this.createForm();

    this.getProductIdFromRoute();
    this.getProductById();
  }



  private createForm(): void {
    this.productFormGroup = this.formBuilder.group({
      name: [""],
      unitPrice:[""],
      unitsInStock:[""],
      categoryId:[""]
    })
  }


  getProductIdFromRoute() {
    this.route.params
      .subscribe((params) => {
        const productId = Number(params['productId']);
        if (productId) this.productId = productId;
        else {
          this.router.navigate(['/']);
          throw new Error('Product ID is invalid: ' + productId);
        }
      })
      .unsubscribe();
  }

  getProductById() {
    this.productService.getById(this.productId).subscribe((res) => {
      this.productById = res;
      this.change.markForCheck();

      this.setFormData();
    })
  }

  private setFormData(){
    this.productFormGroup.patchValue({
      name: this.productById.name,
      unitPrice:this.productById.unitPrice,
      unitsInStock:this.productById.unitsInStock,
      categoryId: this.productById.categoryId
    });
  }

  updateForm() {
    let productModelData:ProductModel = {
      id: this.productById.id,
      name:this.productFormGroup.value.name,
      unitPrice:this.productFormGroup.value.unitPrice,
      unitsInStock:this.productFormGroup.value.unitsInStock,
      categoryId:this.productFormGroup.value.categoryId

    }
this.productService.update(productModelData).subscribe((res)=>{
this.router.navigate(["/products"]);
});
  }
}

