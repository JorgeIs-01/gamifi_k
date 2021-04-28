import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnRankingAlumneComponent } from './un-ranking-alumne.component';

describe('UnRankingAlumneComponent', () => {
  let component: UnRankingAlumneComponent;
  let fixture: ComponentFixture<UnRankingAlumneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnRankingAlumneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnRankingAlumneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
