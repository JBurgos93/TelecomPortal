import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanContentComponent } from './plan-content.component';

describe('PlanContentComponent', () => {
  let component: PlanContentComponent;
  let fixture: ComponentFixture<PlanContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
