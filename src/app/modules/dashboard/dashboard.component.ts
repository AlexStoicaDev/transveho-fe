import { Component, OnInit, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  detailsColumnsToDisplay,
  passengerColumns,
  transferColumns
} from './columns-to-display';
import { Transfer } from '@transveho-core';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state(
        'expanded',
        style({
          height: '*'
        })
      ),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class DashboardComponent implements OnInit {
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;

  dataSource = new MatTableDataSource<Transfer>();
  transferColumns = transferColumns;
  passengerColumns = passengerColumns;

  headerColumns = this.transferColumns
    .map(column => column.elementPropertyName)
    .concat(this.passengerColumns.map(column => column.elementPropertyName));

  detailsColumnsToDisplay = detailsColumnsToDisplay;

  expandedElement: Transfer | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataSource.data = this.route.snapshot.data.transfers;
  }
}
