import {Component, Input, OnInit} from '@angular/core';
import {DropdownMenuItem} from './dropdown-menu-item';
import {DropdownEventType} from '../../../dropdown/dropdown-event-type.enum';
import {DropdownDirection} from '../../../dropdown/dropdown-direction.enum';
import {DropdownComponent} from '../../../dropdown/dropdown/dropdown.component';
import {DropdownService} from '../../../dropdown/dropdown/dropdown.service';

@Component({
  selector: 'bs-dropdown-menu-item',
  templateUrl: './dropdown-menu-item.component.html',
  styleUrls: [
    './dropdown-menu-item.component.css',
    '../../../../styles/bs-variables.css'
  ]
})
export class DropdownMenuItemComponent<T> implements OnInit {

  @Input()
  dropdownMenuItem: DropdownMenuItem<T>

  @Input()
  data: T

  dropdownEventTypeEnum = DropdownEventType;
  dropdownDirectionEnum = DropdownDirection;

  showedDropdownComponents = new Array<DropdownComponent<T>>()

  constructor(private dropdownService: DropdownService) { }

  ngOnInit(): void {
  }

  MenuItemMouseEnter = () => {
    this.dropdownMenuItem.parentMenu.menuItems
      .filter(item => item !== this.dropdownMenuItem)
      .forEach(item => item.innerMenu?.Hide());
  }

  DropdownOnShow = (dropdownComponent: DropdownComponent<T>) => {
    this.showedDropdownComponents.push(dropdownComponent)
  }

  ItemClickHandler(event: MouseEvent) {
    event.stopPropagation();
    if (this.dropdownMenuItem.disabled(this.data) || this.dropdownMenuItem.action == null)
      return;

    this.dropdownMenuItem.action(this.data)
    this.dropdownService.HideAll();
  }
}
