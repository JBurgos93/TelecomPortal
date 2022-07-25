import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlansContainerComponent } from './new-plans-container.component';

describe('NewPlansContainerComponent', () => {
  let component: NewPlansContainerComponent;
  let fixture: ComponentFixture<NewPlansContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlansContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPlansContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
