import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPromocionComponent } from './modal-promocion.component';

describe('ModalPromocionComponent', () => {
  let component: ModalPromocionComponent;
  let fixture: ComponentFixture<ModalPromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPromocionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
