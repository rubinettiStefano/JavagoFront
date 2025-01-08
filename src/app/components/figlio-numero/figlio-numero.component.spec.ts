import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiglioNumeroComponent } from './figlio-numero.component';

describe('FiglioNumeroComponent', () => {
  let component: FiglioNumeroComponent;
  let fixture: ComponentFixture<FiglioNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiglioNumeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiglioNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
