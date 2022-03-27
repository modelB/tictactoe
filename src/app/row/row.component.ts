import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'row',
  template: `
    <div class='row'>
      <box></box>
      <box></box>
      <box></box>
    </div>
  `,
  styles: [
    `
      .row {
        display: flex;
      }
    `
  ]
})
export class RowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
