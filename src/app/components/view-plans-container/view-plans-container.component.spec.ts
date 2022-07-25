import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlansContainerComponent } from './view-plans-container.component';

describe('ViewPlansContainerComponent', () => {
  let component: ViewPlansContainerComponent;
  let fixture: ComponentFixture<ViewPlansContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlansContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPlansContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
