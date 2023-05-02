import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingSubjectComponent } from './trending-subject.component';

describe('TrendingSubjectComponent', () => {
  let component: TrendingSubjectComponent;
  let fixture: ComponentFixture<TrendingSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
