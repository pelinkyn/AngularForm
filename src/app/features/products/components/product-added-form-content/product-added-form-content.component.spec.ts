import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddedFormContentComponent } from './product-added-form-content.component';

describe('ProductAddedFormContentComponent', () => {
  let component: ProductAddedFormContentComponent;
  let fixture: ComponentFixture<ProductAddedFormContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAddedFormContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductAddedFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
