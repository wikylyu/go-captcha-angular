import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GocaptchaComponent } from './gocaptcha.component';

describe('GocaptchaComponent', () => {
  let component: GocaptchaComponent;
  let fixture: ComponentFixture<GocaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GocaptchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GocaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
