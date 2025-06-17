import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css'],
})
export class CompAtributosComponent implements OnInit {
  estilo: string = 'disable';
  corFundo: string = 'red';
  item: string = '';
  lista: string[] = [];
  isEnableBlock: boolean = true

  constructor() {}

  ngOnInit(): void {}

  adicionarLista() {
    this.lista.push(this.item);
  }
  trocarCorFont() {
    if (this.estilo === 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }
}
