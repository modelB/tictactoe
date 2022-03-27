import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'box',
  template: `
    <div class='box'>
    </div>
  `,
  styles: [
    `
      .box {
        border: 1px solid grey;
        height: 140px;
        width: 140px;
      }
    `
  ]
})
export class BoxComponent implements OnInit {

  constructor() { }

  increment() {
    // TODO: Dispatch an increment action
  }

  ngOnInit(): void {
  }

}
