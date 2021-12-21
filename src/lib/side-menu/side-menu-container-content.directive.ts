import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[bsSideMenuContainerContent]'
})
export class SideMenuContainerContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
