import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit{
  @Input()
  status: string;

  ngOnInit(){
    debugger
  }
}
