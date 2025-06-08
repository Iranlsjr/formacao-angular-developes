import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

	@Input() name:string = ''

  constructor() {
		console.log(`Constructor`)
	 }
	ngOnChanges(): void {
		console.log(`Onchanges ${this.name}`)
	}

  ngOnInit(): void {
		console.log(`OnInit ${this.name}`)
		this.name = `Olá, ${this.name}` + " x"
  }

}
