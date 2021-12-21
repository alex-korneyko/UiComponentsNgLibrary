import {AfterViewChecked, Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {Size} from '../size.enum';

@Directive({
  selector: '[bsSize]'
})
export class SizeDirective implements AfterViewChecked{

  @Input()
  bsSize: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewChecked() {
    this.renderer.addClass(this.elementRef.nativeElement, this.bsSize)
  }
}
