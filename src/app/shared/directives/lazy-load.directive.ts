import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({
  selector: '[appLazyLoad]',
})
export class LazyLoadDirective implements OnInit {
  @Input() lazySrc!: any;
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.src = this.lazySrc;
          observer.unobserve(this.el.nativeElement);
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }
}
