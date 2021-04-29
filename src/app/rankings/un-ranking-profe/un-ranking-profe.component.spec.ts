import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnRankingProfeComponent } from './un-ranking-profe.component';

describe('UnRankingProfeComponent', () => {
  let component: UnRankingProfeComponent;
  let fixture: ComponentFixture<UnRankingProfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnRankingProfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnRankingProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
