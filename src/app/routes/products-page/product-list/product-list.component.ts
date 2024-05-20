import { Component } from '@angular/core';
import { ProductsTableComponent } from "../../../features/products/components/products-table/products-table.component";
import { LayoutComponent } from "../../../shared/layout/layout.component";

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss',
    imports: [ProductsTableComponent, LayoutComponent]
})
export class ProductListComponent {

}
