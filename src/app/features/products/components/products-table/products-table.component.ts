import { AfterContentChecked, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import { ProductsService } from '../../services/products.service';
import { PopupDeleteComponent } from '../../../../shared/popup-delete/popup-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { ProductsWithCategories } from '../../models/products-with-categories.model';
import { CategoryJoinModel } from '../../../../features/categories/models/category-join-model';
import { CategoriesService } from '../../../categories/services/categories.service';
import { CategoryModel } from '../../../categories/models/category-model';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductsTableComponent implements OnInit,AfterContentChecked {
  productList: ProductModel[] = [];
  categoryList:CategoryModel[]=[];
  joinedData: any[] = [];

  constructor(
    private productsService: ProductsService,
    private categoryService: CategoriesService,
    private change: ChangeDetectorRef,
    public popup: MatDialog,
  ) { }
  ngAfterContentChecked(): void {


  }
  ngAfterContentInit(): void {

  }

  ngOnInit(): void {
    this.getList();


    // let products: ProductModel[]=[];
    // this.productsService.getList().subscribe((res) => {
    //   products = res;
    //   this.change.markForCheck();

    // });


    // let categories: CategoryModel[]=[];


  }

  getList() {
    this.productsService.getList().subscribe((res) => {
      this.productList = res;
      this.change.markForCheck();
    });

    this.categoryService.getList().subscribe((res) => {
      this.categoryList = res;
    this.productList = joinTables(this.productList,this.categoryList);

      this.change.markForCheck();
    });

  }


  deleteProduct(id: number) {
    this.productsService.delete(id).subscribe();
  }

  showDeletePopup(id: number) {
    const popupRef = this.popup.open(PopupDeleteComponent, {
      data: {
        baslik: "Uyarı!",
        message: "Silme işlemini gerçekleştirmek istiyor musunuz?",
      }
    });

    popupRef.componentInstance.confirm.subscribe((res) => {
      if (res) {
        this.deleteProduct(id);
        window.location.reload();
      }
      this.popup.closeAll()
    })
  }
}






function joinTables(table1: ProductModel[], table2: CategoryModel[]): ProductModel[] {
  return table1.map(item1 => {
    const item2 = table2.find(item2 => item2.id === item1.categoryId);

    item1.category=item2;
    return item1;
  });
}

