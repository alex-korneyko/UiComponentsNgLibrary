import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SideMenuContainerContentDirective} from './side-menu-container-content.directive';
import {SideMenuItemParam} from './side-menu-item-param';
import {SideMenuListObject} from './side-menu-list-object';
import {Size} from '../size.enum';

@Component({
  selector: 'bs-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit, OnChanges {

  @ViewChild("sideMenuContainer")
  sideMenuContainer: ElementRef;

  @ViewChild(SideMenuContainerContentDirective, {static: true})
  sideMenuContentHost: SideMenuContainerContentDirective;

  @Input()
  menuItems = new Array<SideMenuItemParam>()

  @Input()
  menuWidth = 200

  @Input()
  size: Size

  selectedMenuItem: SideMenuItemParam;
  sideMenuListObjects = new Array<SideMenuListObject>();
  private nestingLevelCounter = 0;

  separatorDragging = false;

  viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChanges(changes: SimpleChanges) {
    this.sideMenuListObjects = new Array<SideMenuListObject>();
    this.nestingLevelCounter = 0;
    this.FillMenuListObject(this.menuItems);
  }

  private FillMenuListObject(menuItems: SideMenuItemParam[], parent?: SideMenuListObject) {
    menuItems.forEach(item => {
      let sideMenuListObject = new SideMenuListObject(item, this.nestingLevelCounter, parent);
      parent?.children.push(sideMenuListObject);
      this.sideMenuListObjects.push(sideMenuListObject);
      if (item.children?.length > 0) {
        this.nestingLevelCounter++;
        this.FillMenuListObject(item.children, sideMenuListObject)
      }
    })
    this.nestingLevelCounter--;
  }

  ngOnInit(): void {
    if (this.menuItems.length > 0) {
      this.selectedMenuItem = this.menuItems[0];
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.menuItems[0].menuItemComponent);
      this.viewContainerRef = this.sideMenuContentHost.viewContainerRef;
      this.viewContainerRef.clear();

      this.viewContainerRef.createComponent(componentFactory);
    }
  }

  SeparatorDragStartHandler(event: DragEvent) {
    this.separatorDragging = true;
    event.dataTransfer.setDragImage(document.createElement('img'), 0, 0);
  }

  SeparatorDragEndHandler(event: DragEvent) {
    this.separatorDragging = false;
  }

  MenuItemClickHandler(sideMenuItemParam: SideMenuListObject) {
    this.selectedMenuItem = sideMenuItemParam.sideMenuItemParam;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(sideMenuItemParam.sideMenuItemParam.menuItemComponent);

    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }

  DragOverLeftSideHandler(event: DragEvent) {
    if (this.separatorDragging) {
      this.menuWidth -= (this.menuWidth - event.offsetX);
    }
  }

  DragOverRightSide(event: DragEvent) {
    if (this.separatorDragging) {
      this.menuWidth += event.offsetX;
    }
  }
}
