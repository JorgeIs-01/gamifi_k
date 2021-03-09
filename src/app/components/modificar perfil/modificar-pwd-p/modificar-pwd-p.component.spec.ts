import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPwdPComponent } from './modificar-pwd-p.component';

describe('ModificarPwdPComponent', () => {
  let component: ModificarPwdPComponent;
  let fixture: ComponentFixture<ModificarPwdPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPwdPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPwdPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
