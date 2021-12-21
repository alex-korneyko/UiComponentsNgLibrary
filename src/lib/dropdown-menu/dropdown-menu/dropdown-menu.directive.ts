import {AfterViewChecked, Directive, ElementRef, HostListener, Input} from '@angular/core';
import {DropdownEventType} from '../../dropdown/dropdown-event-type.enum';
import {DropdownMenuService} from './dropdown-menu.service';
import {DropdownMenuComponent} from './dropdown-menu-component/dropdown-menu.component';

@Directive({
  selector: '[bsDropdownMenu]'
})
export class DropdownMenuDirective<T> implements AfterViewChecked{

  @Input() bsDropdownMenu: {menuComponent: DropdownMenuComponent<T>, data?: T};
  @Input() bsDropdownMenuEventType: DropdownEventType = DropdownEventType.MouseContext;

  constructor(private elementRef: ElementRef, private dropdownMenuService: DropdownMenuService) { }

  ngAfterViewChecked() {
    this.bsDropdownMenu.menuComponent.dropdownComponent.dropdownSensitiveArea = this.elementRef;
  }

  @HostListener('click', ['$event'])
  OnClick(event: MouseEvent) {
    if (this.bsDropdownMenuEventType === DropdownEventType.MouseClick) {
      this.ShowMenu(event);
    }
  }

  @HostListener('dblclick', ['$event'])
  OnDblClick(event: MouseEvent) {
    if (this.bsDropdownMenuEventType === DropdownEventType.MouseDoubleClick) {
      this.ShowMenu(event);
    }
  }

  @HostListener('mouseenter', ['$event'])
  OnMouseEnter(event: MouseEvent) {
    if (this.bsDropdownMenuEventType === DropdownEventType.MouseEnter) {
      this.ShowMenu(event);
    }
  }

  @HostListener('contextmenu', ['$event'])
  OnMouseContext(event: MouseEvent) {
    event.preventDefault();
    if (this.bsDropdownMenuEventType === DropdownEventType.MouseContext) {
      this.ShowMenu(event);
    }
  }

  private ShowMenu(event: MouseEvent) {
    if (this.bsDropdownMenu == null) {
      return;
    }
    this.bsDropdownMenu.menuComponent.SetPayload(this.bsDropdownMenu.data)
    this.dropdownMenuService.Show(this.bsDropdownMenu.menuComponent, event);
  }
}
