import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <div class="titleWrap">
        <img class="img" src='../assets/Tic-Tac-Logo.jpeg' alt="tic tac" />
        <img class="img" src='../assets/1368138391.png' alt="tic tac" />
      </div>
      <board></board>
    </div>
  `,
  styles: [
    `
      .app {
        width: 500px;
        height: 600px;
        display: flex;
        margin: auto;
        padding-top: 50px;
        justify-content: space-between;
        align-items: center;
        font-size: 2em;
        font-weight: bold;
        font-family: 'Luminari';
        flex-direction: column;
        color: #3264a8;
      }
      .img {
        height: 80px;
      }
    `
  ],
})
export class AppComponent {
  title = 'tictactoe';
}
