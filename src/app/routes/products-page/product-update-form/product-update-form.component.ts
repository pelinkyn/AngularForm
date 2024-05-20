import { Component } from '@angular/core';
import { ProductsUpdateFormContentComponent } from "../../../features/products/components/products-update-form-content/products-update-form-content.component";
import { LayoutComponent } from "../../../shared/layout/layout.component";

@Component({
    selector: 'app-product-update-form',
    standalone: true,
    templateUrl: './product-update-form.component.html',
    styleUrl: './product-update-form.component.scss',
    imports: [ProductsUpdateFormContentComponent, LayoutComponent]
})
export class ProductUpdateFormComponent {

}
