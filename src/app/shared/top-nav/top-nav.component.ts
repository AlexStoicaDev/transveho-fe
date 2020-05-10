import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, OnDestroy {
  showMenu = false;
  selectedPage = '';

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'navigation-bar-padding');
  }

  ngOnInit(): void {}

  showHeader() {
    this.showMenu = !this.showMenu;
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }

  setSelectedPage(selectedPage: string) {
    this.selectedPage = selectedPage;
  }

  //TODO refactor component logic template and style
}
