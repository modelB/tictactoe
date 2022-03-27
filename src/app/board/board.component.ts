import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  template: `
    <div class='board'>
      <row></row>
      <row></row>
      <row></row>
</div>
  `,
  styles: [`
    p {
      color: 'blue';
    }
  `]
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string | null;

  constructor() { }

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

}
