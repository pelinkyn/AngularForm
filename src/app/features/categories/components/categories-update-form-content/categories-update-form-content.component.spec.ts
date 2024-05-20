import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesUpdateFormContentComponent } from './categories-update-form-content.component';

describe('CategoriesUpdateFormContentComponent', () => {
  let component: CategoriesUpdateFormContentComponent;
  let fixture: ComponentFixture<CategoriesUpdateFormContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesUpdateFormContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesUpdateFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
