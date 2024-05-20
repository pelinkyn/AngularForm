import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddedFormComponent } from './product-added-form.component';

describe('ProductAddedFormComponent', () => {
  let component: ProductAddedFormComponent;
  let fixture: ComponentFixture<ProductAddedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAddedFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductAddedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
