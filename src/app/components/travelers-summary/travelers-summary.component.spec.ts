import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelersSummaryComponent } from './travelers-summary.component';

describe('TravelersSummaryComponent', () => {
  let component: TravelersSummaryComponent;
  let fixture: ComponentFixture<TravelersSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelersSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelersSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
