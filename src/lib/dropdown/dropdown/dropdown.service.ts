import {ElementRef, Injectable} from '@angular/core';
import {DropdownComponent} from './dropdown.component';
import {DropdownDirection} from '../dropdown-direction.enum';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  dropdowns = new Array<DropdownComponent<any>>()

  constructor() {
    window.addEventListener('click', this.BrowserAreaMouseEvent);
    window.addEventListener('dragover', this.BrowserAreaMouseEvent);
  }

  Show = (dropdownComponent: DropdownComponent<any>, event: MouseEvent) => {
    if (dropdownComponent.isSingleton) {
      this.HideAll();
    }

    dropdownComponent.dropdownClickedNow = event.type === "click";
    dropdownComponent.dropdownContentContainer.nativeElement.classList.add("show")
    dropdownComponent.shown = true;
    dropdownComponent.shownChange.emit(true);
    dropdownComponent.onShow.emit(dropdownComponent);
    dropdownComponent.componentCreated.subscribe(() => this.Positioning(dropdownComponent, event))

    // this.Positioning(dropdownComponent, event);
  }

  Hide = (dropdownComponent: DropdownComponent<any>) => {
    if (dropdownComponent.shown) {
      dropdownComponent.dropdownContentContainer.nativeElement.classList.remove("show");
      dropdownComponent.shown = false;
      dropdownComponent.shownChange.emit(false);
      dropdownComponent.onHide.emit(dropdownComponent);
    }
  }

  HideAll = () => {
    this.dropdowns.forEach(drop => {
      if (drop.dropdownClickedNow) {
        drop.dropdownClickedNow = false;
      } else {
        this.Hide(drop);
      }
    })
  }

  private Positioning(dropdownComponent: DropdownComponent<any>, event: MouseEvent) {
    let position: {positionLeft: number, positionTop: number};

    switch (dropdownComponent.direction) {
      case DropdownDirection.Top: {
        position = this.PositionToTop(dropdownComponent, event);
        break;
      }
      case DropdownDirection.Bottom: {
        position = this.PositionToBottom(dropdownComponent, event);
        break;
      }
      case DropdownDirection.Left: {
        position = this.PositionToLeft(dropdownComponent, event);
        break;
      }
      case DropdownDirection.Right: {
        position = this.PositionToRight(dropdownComponent, event);
        break;
      }
      default: {
        position = DropdownService.PositionOnClick(dropdownComponent, event);
      }
    }

    dropdownComponent.dropdownContentContainer.nativeElement.style.left = position.positionLeft + dropdownComponent.shiftX + 'px';
    dropdownComponent.dropdownContentContainer.nativeElement.style.top = position.positionTop + dropdownComponent.shiftY + 'px';
  }

  private PositionToTop(dropdownComponent: DropdownComponent<any>, event: MouseEvent): {positionLeft: number, positionTop: number} {
    let positionParams = DropdownService.GetPositionParams(dropdownComponent.dropdownContentContainer);

    let positionLeft = event.clientX - event.offsetX;
    let positionTop = event.clientY - event.offsetY - positionParams.dropdownContentHeight;

    if (positionTop < 10) {
      positionTop = this.PositionToBottom(dropdownComponent, event).positionTop;
    }

    return {positionLeft: DropdownService.FitHorizontal(dropdownComponent.dropdownContentContainer, positionLeft), positionTop};
  }

  private PositionToBottom(dropdownComponent: DropdownComponent<any>, event: MouseEvent): {positionLeft: number, positionTop: number} {
    let positionParams = DropdownService.GetPositionParams(dropdownComponent.dropdownContentContainer);

    let positionLeft = event.clientX - event.offsetX;
    let positionTop = event.clientY + (dropdownComponent.dropdownSensitiveArea.nativeElement.offsetHeight - event.offsetY);

    if (positionTop + positionParams.dropdownContentHeight > positionParams.workSpaceHeight - 30) {
      positionTop = this.PositionToTop(dropdownComponent, event).positionTop;
    }

    return {positionLeft: DropdownService.FitHorizontal(dropdownComponent.dropdownContentContainer, positionLeft), positionTop};
  }

  private PositionToRight(dropdownComponent: DropdownComponent<any>, event: MouseEvent): {positionLeft: number, positionTop: number} {
    let positionParams = DropdownService.GetPositionParams(dropdownComponent.dropdownContentContainer);

    let positionLeft = event.clientX + (dropdownComponent.dropdownSensitiveArea.nativeElement.offsetWidth - event.offsetX);
    let positionTop = event.clientY - event.offsetY;

    if ((positionLeft + positionParams.dropdownContentWidth) > positionParams.workSpaceWidth - 10) {
      positionLeft = this.PositionToLeft(dropdownComponent, event).positionLeft;
    }

    return {positionLeft, positionTop: DropdownService.FitVertical(dropdownComponent.dropdownContentContainer, positionTop)};
  }

  private PositionToLeft(dropdownComponent: DropdownComponent<any>, event: MouseEvent): {positionLeft: number, positionTop: number} {
    let positionParams = DropdownService.GetPositionParams(dropdownComponent.dropdownContentContainer);

    let positionLeft = event.clientX - event.offsetX - positionParams.dropdownContentWidth;
    let positionTop = event.clientY - event.offsetY;

    if (positionLeft < 10) {
      positionLeft = this.PositionToRight(dropdownComponent, event).positionLeft;
    }

    return {positionLeft, positionTop: DropdownService.FitVertical(dropdownComponent.dropdownContentContainer, positionTop)};
  }

  private static PositionOnClick(dropdownComponent: DropdownComponent<any>, event: MouseEvent): {positionLeft: number, positionTop: number} {
    let positionLeft = DropdownService.FitHorizontal(dropdownComponent.dropdownContentContainer, event.clientX);
    let positionTop = DropdownService.FitVertical(dropdownComponent.dropdownContentContainer, event.clientY);

    return {positionLeft, positionTop}
  }

  private static FitHorizontal(dropdownContentContainer: ElementRef, positionLeft: number): number {
    let positionParams = DropdownService.GetPositionParams(dropdownContentContainer);

    if (positionLeft + positionParams.dropdownContentWidth > positionParams.workSpaceWidth - 10) {
      positionLeft = positionParams.workSpaceWidth - positionParams.dropdownContentWidth - 10;
    }

    if (positionLeft < 10) {
      positionLeft = 10;
    }

    return positionLeft;
  }

  private static FitVertical(dropdownContentContainer: ElementRef, positionTop: number): number {
    let positionParams = DropdownService.GetPositionParams(dropdownContentContainer);

    if ((positionTop + positionParams.dropdownContentHeight) > positionParams.workSpaceHeight - 30) {
      positionTop = positionParams.workSpaceHeight - positionParams.dropdownContentHeight - 40;
    }

    if (positionTop < 10) {
      positionTop = 10;
    }

    return positionTop;
  }

  private static GetPositionParams(dropdownContentContainer: ElementRef) {
    let workSpaceWidth = window.innerWidth;
    let workSpaceHeight = window.innerHeight;
    let dropdownContentWidth = dropdownContentContainer.nativeElement.offsetWidth;
    let dropdownContentHeight = dropdownContentContainer.nativeElement.offsetHeight;

    return {workSpaceWidth, workSpaceHeight, dropdownContentWidth, dropdownContentHeight};
  }

  private BrowserAreaMouseEvent = () => {

    this.HideAll();
  }
}
