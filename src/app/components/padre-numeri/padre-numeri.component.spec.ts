import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreNumeriComponent } from './padre-numeri.component';

describe('PadreNumeriComponent', () => {
  let component: PadreNumeriComponent;
  let fixture: ComponentFixture<PadreNumeriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreNumeriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreNumeriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
