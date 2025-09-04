import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: 'img[lazySrc]'
})
export class LazyImgDirective implements OnInit {
  @Input() lazySrc!: string;

  constructor(private el: ElementRef<HTMLImageElement>, private renderer: Renderer2) {
  }

  ngOnInit() {
    const imgEl = this.el.nativeElement;
    this.renderer.addClass(imgEl, 'skeleton');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const realImg = new Image();
          realImg.src = this.lazySrc;

          realImg.onload = () => {
            this.renderer.setAttribute(imgEl, 'src', this.lazySrc);
            this.renderer.removeClass(imgEl, 'skeleton');
            this.renderer.setStyle(imgEl, 'transition', 'opacity 0.5s ease-in');
            this.renderer.setStyle(imgEl, 'opacity', '1');
          };

          observer.unobserve(imgEl);
        }
      });
    }, {rootMargin: '100px'});

    observer.observe(imgEl);
  }
}
