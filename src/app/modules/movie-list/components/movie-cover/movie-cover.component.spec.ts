import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieCoverComponent} from './movie-cover.component';

describe('MovieCoverComponent', () => {
  let component: MovieCoverComponent;
  let fixture: ComponentFixture<MovieCoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCoverComponent]
    });
    fixture = TestBed.createComponent(MovieCoverComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    component.movie = {
      title: '',
      description: '',
      releaseYear: 0,
      images: {}
    };
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
