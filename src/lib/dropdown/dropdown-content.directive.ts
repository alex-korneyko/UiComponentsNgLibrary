import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[bsDropdownContent]'
})
export class DropdownContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
