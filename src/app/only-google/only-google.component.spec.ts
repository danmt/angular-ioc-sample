import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyGoogleComponent } from './only-google.component';

describe('OnlyGoogleComponent', () => {
  let component: OnlyGoogleComponent;
  let fixture: ComponentFixture<OnlyGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
