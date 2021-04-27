import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRankingAlumnoComponent } from './listar-ranking-alumno.component';

describe('ListarRankingAlumnoComponent', () => {
  let component: ListarRankingAlumnoComponent;
  let fixture: ComponentFixture<ListarRankingAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRankingAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRankingAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
