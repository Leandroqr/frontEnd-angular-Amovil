import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddDepartamentoComponent } from './form-add-departamento.component';

describe('FormAddDepartamentoComponent', () => {
  let component: FormAddDepartamentoComponent;
  let fixture: ComponentFixture<FormAddDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
