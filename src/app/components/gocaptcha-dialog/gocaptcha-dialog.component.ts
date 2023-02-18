import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-gocaptcha-dialog',
  templateUrl: './gocaptcha-dialog.component.html',
  styleUrls: ['./gocaptcha-dialog.component.scss'],
})
export class GocaptchaDialogComponent implements OnInit {
  constructor(private http: HttpClient) {}
  @Output() verified = new EventEmitter<string>();

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.getCaptchaData();
  }

  loading = false; // loading在这个示例中没有用处，可以根据情况增加加载中的效果
  captchaData: any = null;
  async getCaptchaData() {
    try {
      this.loading = true;
      const r = await lastValueFrom(
        this.http.get('http://127.0.0.1:9001/api/go_captcha_data')
      );
      this.captchaData = r;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  dots: any[] = [];
  onDotsChanged(e: any) {
    this.dots = e;
    console.log(this.dots);
  }

  onConfirm() {
    if (this.dots.length === 0) {
      return;
    }
    this.checkCaptchaData();
  }

  async checkCaptchaData() {
    try {
      this.loading = true;
      let dots = [];
      for (const d of this.dots) {
        dots.push(d.x);
        dots.push(d.y);
      }
      const body = new FormData();
      body.set('key', this.captchaData?.captcha_key);
      body.set('dots', dots.join(','));
      const r = (await lastValueFrom(
        this.http.get(
          'http://127.0.0.1:9001/api/go_captcha_check_data?key=' +
            this.captchaData?.captcha_key +
            '&dots=' +
            dots.join(',')
        )
      )) as any;
      if (r.code === 0) {
        this.verified.emit(this.captchaData?.captcha_key);
      } else {
        alert('验证失败');
        this.reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }
}
