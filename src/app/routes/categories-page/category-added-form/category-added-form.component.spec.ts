import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAddedFormComponent } from './category-added-form.component';

describe('CategoryAddedFormComponent', () => {
  let component: CategoryAddedFormComponent;
  let fixture: ComponentFixture<CategoryAddedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryAddedFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryAddedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
