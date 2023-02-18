import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-image-pointer',
  templateUrl: './image-pointer.component.html',
  styleUrls: ['./image-pointer.component.scss'],
})
export class ImagePointerComponent {
  @Input() image64 = '';
  @Input() width = '300px';
  @Input() height = '240px';
  @ViewChild('canvas') canvas!: ElementRef;
  @Output() dotsChange = new EventEmitter<any[]>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.reset();
  }

  reset() {
    this.dots = [];
    this.dotsChange.emit(this.dots);
    if (!this.canvas) {
      return;
    }
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };
    image.src = this.image64;
  }

  dots: any[] = [];
  click(evt: any) {
    if (!this.canvas || this.dots.length > 6) {
      return;
    }
    const canvas = this.canvas.nativeElement;
    var rect = canvas.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;
    this.dots.push({ x, y });
    this.dotsChange.emit(this.dots);
  }
}
