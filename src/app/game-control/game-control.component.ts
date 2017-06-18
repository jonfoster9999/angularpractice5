import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() myEvent = new EventEmitter<{num: number}>();
  ref;
  counter: number = 0;



  constructor() { }

  ngOnInit() {
  }

  startGame() {
  	this.ref = setInterval(() => {
  		this.myEvent.emit({num: this.counter += 1});
  	}, 1000);
  }

  stopGame() {
  	clearInterval(this.ref);
  }

}
