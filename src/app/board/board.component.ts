import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  template: `
    <p>Current Player is: {{player}}</p>
    <div class="headerBox">
    <button (click)="newGame()">New Game</button>
    <div *ngIf="this.winner">Player {{this.winner}} is the winner!</div>
</div>
    <div class="grid">
      <box *ngFor='let val of squares; let i = index'
      [value]='val'
      (click)='makeMove(i)'></box>
    </div>
  `,
  styles: [
    `
      .headerBox {
        display: flex;
        justify-content: space-between;
        height: 50px;
      }
      .grid {
        border: 1px solid grey;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
    `,
  ],
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string | null;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(i: number) {
    if (!this.squares[i] && !this.winner) {
      this.squares[i] = this.player;
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[b] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
