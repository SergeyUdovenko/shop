import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickDecorator]'
})
export class ClickDecoratorDirective {
  @Input('appClickDecorator') border: string;
  private el: HTMLElement;
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
   }
   @HostListener('click') onclick() {
     this.changeBorder(this.border || '2px dotted gray');
   }

   private changeBorder(border: string) {
    this.el.style.border = border;
   }

}
