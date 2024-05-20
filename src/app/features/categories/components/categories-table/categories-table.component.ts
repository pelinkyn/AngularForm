import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../models/category-model';
import { CategoriesService } from '../../services/categories.service';
import { Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupDeleteComponent } from '../../../../shared/popup-delete/popup-delete.component';


@Component({
  selector: 'app-categories-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories-table.component.html',
  styleUrl: './categories-table.component.scss'
})
export class CategoriesTableComponent implements OnInit {

categoryList: CategoryModel[]=[];

constructor(
  private categoriesService:CategoriesService,
  private change: ChangeDetectorRef,
  public popup:MatDialog,
  private router:Router
){}

ngOnInit(): void {
  this.getList()

}

getList(){
this.categoriesService.getList().subscribe((res)=>{
  this.categoryList = res;
  this.change.markForCheck();
});
}

deleteCategory(id:number){
this.categoriesService.delete(id).subscribe();
}

showDeletePopup(id:number){
const popupRef = this.popup.open(PopupDeleteComponent,{
    data:{
      baslik:"Uyarı!",
      message:"Silme işlemini gerçekleştirmek istiyor musunuz?",
    }
  });

  popupRef.componentInstance.confirm.subscribe((res)=>{
    if (res) {
      this.deleteCategory(id);
      window.location.reload();
    }
      this.popup.closeAll()
  })
}
}
