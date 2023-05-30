import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCoverComponent } from './movie-cover.component';

describe('MovieCoverComponent', () => {
  let component: MovieCoverComponent;
  let fixture: ComponentFixture<MovieCoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCoverComponent]
    });
    fixture = TestBed.createComponent(MovieCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
