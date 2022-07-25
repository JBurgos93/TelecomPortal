import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickPlanCardComponent } from './pick-plan-card.component';

describe('PickPlanCardComponent', () => {
  let component: PickPlanCardComponent;
  let fixture: ComponentFixture<PickPlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickPlanCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickPlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
