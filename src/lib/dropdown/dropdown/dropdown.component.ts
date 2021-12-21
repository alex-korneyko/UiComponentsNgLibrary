import {
  AfterViewChecked,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Type,
  ViewChild
} from '@angular/core';
import {DropdownDirection} from '../dropdown-direction.enum';
import {DropdownContentDirective} from '../dropdown-content.directive';
import {IDropdownContent} from '../idropdown-content';
import {DropdownService} from './dropdown.service';

@Component({
  selector: 'bs-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent<T> implements OnInit, AfterViewChecked {

  @ViewChild("dropdownContainer")
  dropdownContentContainer: ElementRef;

  @ViewChild(DropdownContentDirective, {static: true})
  dropdownHost: DropdownContentDirective;

  @Input() shown = false;
  @Output() shownChange = new EventEmitter<boolean>();

  @Output() onShow = new EventEmitter<DropdownComponent<T>>();
  @Output() onHide = new EventEmitter<DropdownComponent<T>>();

  @Input() content: Type<IDropdownContent<T>>

  @Input() direction: DropdownDirection;

  @Input() shiftX = 0;
  @Input() shiftY = 0;

  @Input() isSingleton = true;

  @Output() componentCreated = new EventEmitter<DropdownComponent<T>>();
  @Output() instanceCreated = new EventEmitter<IDropdownContent<T>>();

  dropdownClickedNow = false;
  dropdownSensitiveArea: ElementRef;
  data: T
  dropdownContentInstance: IDropdownContent<T>

  constructor(private dropdownService: DropdownService, private componentFactoryResolver: ComponentFactoryResolver) {
    dropdownService.dropdowns.push(this);
  }

  ngOnInit(): void {
    if (this.content) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.content);
      let viewContainerRef = this.dropdownHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);
      this.dropdownContentInstance = componentRef.instance;
      this.dropdownContentInstance.dropdownContainerComponent = this;
      this.instanceCreated.emit(this.dropdownContentInstance);
    }
  }

  ngAfterViewChecked() {
    this.componentCreated.emit(this);
  }

  SetPayload(data: T) {
    this.dropdownContentInstance.data = data;
  }

  Show(mouseEvent: MouseEvent) {
    this.dropdownService.Show(this, mouseEvent)
  }

  Hide() {
    this.dropdownService.Hide(this);
  }
}
