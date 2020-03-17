import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'uno '},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'my-app',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  displayedColumns: string[] = ['name'];
  dataSource = ELEMENT_DATA;
}
