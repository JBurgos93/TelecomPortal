import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingPageContentComponent } from './billing-page-content.component';

describe('BillingPageContentComponent', () => {
  let component: BillingPageContentComponent;
  let fixture: ComponentFixture<BillingPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingPageContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
