import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	odd: number[] = [];
	even: number[] = [];

	handleEvent(e) {
		if (e.num % 2 == 0) {
			this.even.push(e.num);
		} else {
			this.odd.push(e.num);
		}
	}


}
