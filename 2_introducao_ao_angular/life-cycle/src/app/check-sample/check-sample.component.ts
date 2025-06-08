import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy,
} from '@angular/core';

@Component({
	selector: 'app-check-sample',
	templateUrl: './check-sample.component.html',
	styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
	implements
		OnInit,
		DoCheck,
		AfterContentChecked,
		AfterContentInit,
		AfterViewChecked,
		AfterViewInit,
		OnDestroy
{

	quantidade: number = 0


	constructor() {}

	adicionar(){
		this.quantidade += 1
	}

	decrementar(){
		this.quantidade -= 1
	}

	//Cheked --> content --> view

	//Inicia o conteúdo
	ngOnInit(): void {
		console.log("ngOnInit")
	}
	//Verifica o conteúdo
	ngDoCheck(): void {
		console.log("ngDoCheck")
	}
	//quando o primeiro conteúdo é iniciado
	ngAfterContentInit(): void {
				console.log("ngAfterContentInit")
	}
	//após alguma alteração, verifica o conteúdo
	ngAfterContentChecked(): void {
				console.log("ngAfterContentChecked")
	}
	//depois da inicialização da view
	ngAfterViewInit(): void {
				console.log("ngAfterViewInit")
	}
	//Após alguma alteração verifica a view
	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked")
	}

	ngOnDestroy(): void {
		console.log("goddbye")
	}
}
