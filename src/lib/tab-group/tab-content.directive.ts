import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[bsTabContent]'
})
export class TabContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
