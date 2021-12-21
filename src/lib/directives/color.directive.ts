import {AfterViewChecked, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[bsColor]'
})
export class ColorDirective implements AfterViewChecked{

  @Input() bsColor: string

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewChecked() {
    this.renderer.addClass(this.elementRef.nativeElement, this.bsColor);
  }
}
