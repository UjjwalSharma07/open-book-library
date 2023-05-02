import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCardComponentComponent } from './wild-card-component.component';

describe('WildCardComponentComponent', () => {
  let component: WildCardComponentComponent;
  let fixture: ComponentFixture<WildCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
