import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GocaptchaDialogComponent } from './gocaptcha-dialog.component';

describe('GocaptchaDialogComponent', () => {
  let component: GocaptchaDialogComponent;
  let fixture: ComponentFixture<GocaptchaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GocaptchaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GocaptchaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
