import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CategoryModel } from '../../models/category-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-added-form-content',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './category-added-form-content.component.html',
  styleUrl: './category-added-form-content.component.scss'
})
export class CategoryAddedFormContentComponent implements OnInit {

  categoryFormGroup!: FormGroup;
  constructor(
    private categoryService: CategoriesService,
    private formBuilder: FormBuilder,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.createForm()
  }

  private createForm(): void {
    this.categoryFormGroup = this.formBuilder.group({
      name: [""],
      description: [""]
    })
  }

  addedForm() {
    let categoryModelData: CategoryModel = {
      name: this.categoryFormGroup.value.name,
      description: this.categoryFormGroup.value.description
    }

    this.categoryService.added(categoryModelData).subscribe((res) => {
      this.router.navigate(["/categories"]);
    });
  }
}
