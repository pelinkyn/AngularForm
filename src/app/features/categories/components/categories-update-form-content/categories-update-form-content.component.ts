import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { CategoryModel } from '../../models/category-model';
@Component({
  selector: 'app-categories-update-form-content',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './categories-update-form-content.component.html',
  styleUrl: './categories-update-form-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesUpdateFormContentComponent implements OnInit {
  categoryId: number = 0;
  categoryFormGroup!: FormGroup;
  categoryById!: CategoryModel;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoriesService,
    private change: ChangeDetectorRef,
  ) { }


  ngOnInit(): void {
    this.createForm();

    this.getCategoryIdFromRoute();
    this.getCategoryById();
  }



  private createForm(): void {
    this.categoryFormGroup = this.formBuilder.group({
      name: [""],
      description: [""]
    })
  }


  getCategoryIdFromRoute() {
    this.route.params
      .subscribe((params) => {
        const categoryId = Number(params['categoryId']);
        if (categoryId) this.categoryId = categoryId;
        else {
          this.router.navigate(['/']);
          throw new Error('Category ID is invalid: ' + categoryId);
        }
      })
      .unsubscribe();
  }

  getCategoryById() {
    this.categoryService.getById(this.categoryId).subscribe((res) => {
      this.categoryById = res;
      this.change.markForCheck();

      this.setFormData();
    })
  }

  private setFormData() {
    this.categoryFormGroup.patchValue({
      name: this.categoryById.name,
      description: this.categoryById.description
    });
  }

  updateForm() {
    let categoryModelData: CategoryModel = {
      id: this.categoryById.id,
      name: this.categoryFormGroup.value.name,
      description: this.categoryFormGroup.value.description
    }
    this.categoryService.update(categoryModelData).subscribe((res) => {
      this.router.navigate(["/categories"]);
    });
  }
}
