import {Component, Input, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {DropdownDirection} from '../../../dropdown/dropdown-direction.enum';
import {DropdownMenu} from './dropdown-menu';
import {DropdownComponent} from '../../../dropdown/dropdown/dropdown.component';
import {DropdownMenuContentComponent} from './dropdown-menu-content/dropdown-menu-content.component';
import {IDropdownMenu} from '../../idropdown-menu';
import {IDropdownContent} from '../../../dropdown/idropdown-content';

@Component({
  selector: 'bs-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent<T> implements OnInit {

  @ViewChild("menuDropdownComponent", {static: true})
  dropdownComponent: DropdownComponent<T>

  @Input() dropdownDirection: DropdownDirection;
  @Input() dropdownMenu: DropdownMenu<T>
  @Input() isSingleton = true;
  @Input() shiftX = 0;
  @Input() shiftY = 0;

  @Output() dropdownComponentCreated = new EventEmitter<DropdownComponent<T>>();
  @Output() dropdownMenuInstanceCreatedHandler = new EventEmitter<IDropdownContent<T>>();
  @Output() dropdownOnShow = new EventEmitter<DropdownComponent<T>>();
  @Output() dropdownOnHide = new EventEmitter<DropdownComponent<T>>();

  data: T;
  dropdownMenuContentComponent = DropdownMenuContentComponent;

  constructor() { }

  ngOnInit(): void {

  }

  SetPayload(data: T) {
    this.dropdownComponent.SetPayload(data);
  }

  DropdownInstanceCreatedHandler(menuContentComponentInstance: IDropdownContent<any>) {
    (menuContentComponentInstance as IDropdownMenu<T>).menu = this.dropdownMenu;
  }

  DropdownOnShowHandler(event: DropdownComponent<any>) {
    this.dropdownOnShow.emit(event);
  }

  DropdownOnHideHandler(event: DropdownComponent<any>) {
    this.dropdownOnHide.emit(event);
  }

  DropdownComponentCreatedHandler(dropdownComponent: DropdownComponent<any>) {
    this.dropdownMenu?.SetDropdownComponent(dropdownComponent);
    this.dropdownComponentCreated.emit(dropdownComponent);
  }

  PreventDefaults(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
  }
}
