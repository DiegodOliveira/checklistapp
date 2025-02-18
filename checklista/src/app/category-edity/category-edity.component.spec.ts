import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEdityComponent } from './category-edity.component';

describe('CategoryEdityComponent', () => {
  let component: CategoryEdityComponent;
  let fixture: ComponentFixture<CategoryEdityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryEdityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryEdityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
