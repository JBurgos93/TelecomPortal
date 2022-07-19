import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPageContentComponent } from './plan-page-content.component';

describe('PlanPageContentComponent', () => {
  let component: PlanPageContentComponent;
  let fixture: ComponentFixture<PlanPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanPageContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
