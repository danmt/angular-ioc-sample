import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyFacebookComponent } from './only-facebook.component';

describe('OnlyFacebookComponent', () => {
  let component: OnlyFacebookComponent;
  let fixture: ComponentFixture<OnlyFacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyFacebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
