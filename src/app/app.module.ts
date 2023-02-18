import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GocaptchaComponent } from './components/gocaptcha/gocaptcha.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { GocaptchaDialogComponent } from './components/gocaptcha-dialog/gocaptcha-dialog.component';
import { ImagePointerComponent } from './components/image-pointer/image-pointer.component';
@NgModule({
  declarations: [AppComponent, GocaptchaComponent, GocaptchaDialogComponent, ImagePointerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    A11yModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
