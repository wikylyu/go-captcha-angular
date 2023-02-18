import {
  FlexibleConnectedPositionStrategy,
  ConnectionPositionPair,
  Overlay,
} from '@angular/cdk/overlay';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gocaptcha',
  templateUrl: './gocaptcha.component.html',
  styleUrls: ['./gocaptcha.component.scss'],
})
export class GocaptchaComponent {
  isPopupOpened = false;
  isVerified = false;
  positions: ConnectionPositionPair[] = [
    {
      offsetX: 0,
      offsetY: -20,
      originX: 'center',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
    },
  ];

  constructor(private overlay: Overlay) {}

  openPopup() {
    this.isPopupOpened = true;
    this.isVerified = false;
  }

  closePopup() {
    this.isPopupOpened = false;
  }

  onVerified(key: string) {
    this.isPopupOpened = false;
    this.isVerified = true;
  }
}
