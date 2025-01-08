import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTravelerComponent } from './single-traveler.component';

describe('SingleTravelerComponent', () => {
  let component: SingleTravelerComponent;
  let fixture: ComponentFixture<SingleTravelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleTravelerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTravelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
