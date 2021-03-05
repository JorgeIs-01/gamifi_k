import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPwdComponent } from './modificar-pwd.component';

describe('ModificarPwdComponent', () => {
  let component: ModificarPwdComponent;
  let fixture: ComponentFixture<ModificarPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
