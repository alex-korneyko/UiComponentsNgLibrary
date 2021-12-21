import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {SideMenuItemParam} from '../side-menu-item-param';
import {SideMenuListObject} from '../side-menu-list-object';
import {Size} from '../../size.enum';

@Component({
  selector: 'bs-side-menu-items-list',
  templateUrl: './side-menu-items-list.component.html',
  styleUrls: ['./side-menu-items-list.component.css']
})
export class SideMenuItemsListComponent implements OnInit {

  @Input()
  menuWidth: number;

  @Input()
  size: Size;

  @Input()
  sideMenuListObjects = new Array<SideMenuListObject>();

  @Input()
  selectedMenuItem: SideMenuItemParam;

  @Input()
  separatorDragging: boolean

  @Output()
  dragOverLeftSide = new EventEmitter<DragEvent>();

  @Output()
  menuItemClick = new EventEmitter<SideMenuListObject>();

  constructor() { }

  ngOnInit(): void {
  }

  DragOverLeftSideHandler(event: DragEvent) {
    this.dragOverLeftSide.emit(event);
  }

  MenuItemClickHandler(sideMenuListObject: SideMenuListObject) {
    this.menuItemClick.emit(sideMenuListObject)
  }
}
