import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePointerComponent } from './image-pointer.component';

describe('ImagePointerComponent', () => {
  let component: ImagePointerComponent;
  let fixture: ComponentFixture<ImagePointerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePointerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
