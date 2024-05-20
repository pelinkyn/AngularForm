import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAddedFormContentComponent } from './category-added-form-content.component';

describe('CategoryAddedFormContentComponent', () => {
  let component: CategoryAddedFormContentComponent;
  let fixture: ComponentFixture<CategoryAddedFormContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryAddedFormContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryAddedFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
