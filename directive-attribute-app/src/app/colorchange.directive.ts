import { ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }

  @Input() defaultColor: string;

  @Input('appColorchange') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    //  this.el.nativeElement.style.color = color;
     this.render.setStyle(this.el.nativeElement, 'color', color);
  }
}
