import {
  AfterViewChecked,
  Component,
  OnDestroy,
  Renderer2
} from '@angular/core';
import { AuthenticationService, PersonalRole } from '@transveho-core';

//TODO refactor component logic template(naming) and style, fix styling for mobile view

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnDestroy, AfterViewChecked {
  active: boolean = true;
  previousTop: number = 0;
  previousLeft: number = 0;
  previousHeight: number = 68;
  previousWidth: number = 0;
  personalRoles: string[] = [];

  constructor(
    private renderer: Renderer2,
    private authenticationService: AuthenticationService
  ) {}

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }

  setSelectorDivPosition() {
    const activeLink = document.getElementsByClassName('active')[0];
    const selectedLinkCover: HTMLElement = document.getElementsByClassName(
      'hori-selector'
    )[0] as HTMLElement;

    const top: number =
      (activeLink as HTMLElement)?.offsetTop || this.previousTop;
    let left: number =
      (activeLink as HTMLElement)?.offsetLeft || this.previousLeft;
    const height: number = activeLink?.clientHeight + 1 || this.previousHeight;
    const width: number = activeLink?.clientWidth || this.previousWidth;

    if (!activeLink && this.previousLeft !== 0) {
      left = window.innerWidth;
    }
    this.setSelectorDivPositionProperties(
      selectedLinkCover,
      top,
      left,
      height,
      width
    );
    this.setPreviousValues(top, left, height, width);
  }

  private setSelectorDivPositionProperties = (
    selectedLinkCover: HTMLElement,
    top: number,
    left: number,
    height: number,
    width: number
  ) => {
    selectedLinkCover.style.top = top + 'px';
    selectedLinkCover.style.left = left + 'px';
    selectedLinkCover.style.height = height + 'px';
    selectedLinkCover.style.width = width + 'px';
  };

  private setPreviousValues = (
    top: number,
    left: number,
    height: number,
    width: number
  ) => {
    this.previousTop = top;
    this.previousLeft = left;
    this.previousHeight = height;
    this.previousWidth = width;
  };

  ngAfterViewChecked(): void {
    debugger
    this.setSelectorDivPosition();
  }

  onResize($event: any) {
    this.setSelectorDivPosition();
  }
}
