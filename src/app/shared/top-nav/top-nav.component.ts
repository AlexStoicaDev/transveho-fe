import {
  AfterViewChecked,
  Component,
  OnDestroy,
  Renderer2
} from '@angular/core';

//TODO refactor component logic template(naming) and style, fix styling for mobile view

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnDestroy, AfterViewChecked {
  constructor(private renderer: Renderer2) {}

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }

  setSelectorDivPosition() {
    const activeLink = document.getElementsByClassName('active')[0];
    if (activeLink) {
      const selectedLinkCover = document.getElementsByClassName(
        'hori-selector'
      )[0] as HTMLElement;
      selectedLinkCover.style.top =
        (activeLink as HTMLElement).offsetTop + 'px';
      selectedLinkCover.style.left =
        (activeLink as HTMLElement).offsetLeft + 'px';
      selectedLinkCover.style.height = activeLink.clientHeight + 1 + 'px';
      selectedLinkCover.style.width = activeLink.clientWidth + 'px';
    }
  }

  ngAfterViewChecked(): void {
    this.setSelectorDivPosition();
  }

  onResize($event: any) {
    this.setSelectorDivPosition();
  }
}
