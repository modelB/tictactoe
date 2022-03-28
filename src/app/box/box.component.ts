import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'box',
  template: `
  <div class="boxWrap">
    <button class='box'>
      {{value}}
    </button>
  </div>
  `,
  styles: [
    `
      .boxWrap {
        height: 140px;
        width: 140px;
      }
      .box {
        border: 1px solid grey;
        height: 140px;
        width: 140px;
        padding: 0;
        margin: 0;
        background-color: white;
        font-family: inherit;
        color: inherit;
        font-size: 1.5em;
      }
    `
  ]
})
export class BoxComponent {

  constructor() { }

  @Input() value: 'X' | "O";

}
