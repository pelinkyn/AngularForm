import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUpdateFormContentComponent } from './products-update-form-content.component';

describe('ProductsUpdateFormContentComponent', () => {
  let component: ProductsUpdateFormContentComponent;
  let fixture: ComponentFixture<ProductsUpdateFormContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsUpdateFormContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsUpdateFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
