import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos: string[]= []
  menuType: string = ""

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
    ]
   }

  ngOnInit(): void {
  }
  adicionar(){
    this.produtos.push("Iran")
  }
  remover(){
    this.produtos.pop()
  }

}
