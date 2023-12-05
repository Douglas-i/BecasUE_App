import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProgramaComponent } from './modal-programa.component';

describe('ModalProgramaComponent', () => {
  let component: ModalProgramaComponent;
  let fixture: ComponentFixture<ModalProgramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalProgramaComponent]
    });
    fixture = TestBed.createComponent(ModalProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
