import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarRankingComponent } from './entrar-ranking.component';

describe('EntrarRankingComponent', () => {
  let component: EntrarRankingComponent;
  let fixture: ComponentFixture<EntrarRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
