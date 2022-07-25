import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlansCardComponent } from './new-plans-card.component';

describe('NewPlansCardComponent', () => {
  let component: NewPlansCardComponent;
  let fixture: ComponentFixture<NewPlansCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlansCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPlansCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
