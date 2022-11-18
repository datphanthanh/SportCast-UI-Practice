import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetStepComponent } from './bet-step.component';

describe('BetStepComponent', () => {
  let component: BetStepComponent;
  let fixture: ComponentFixture<BetStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
