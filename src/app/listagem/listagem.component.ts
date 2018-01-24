import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { FotoService } from "../servicos/foto.service";
import { FotoComponent } from '../foto/foto.component';

@Component({
	selector: 'cp-listagem',
	templateUrl: './listagem.component.html',
	styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

	titulo = 'Caelumpic'
	listaFotos: FotoComponent[] = []

	constructor(private servico: FotoService) {
		servico.listar()
				.subscribe( 
					fotosApi => { this.listaFotos = fotosApi },
					erro => console.log(erro)
				)

	}

	remover(foto: FotoComponent){
		this.servico.deletar(foto)
						.subscribe(
							resp => {
								console.log(foto)
							},
							erro => console.log(erro)
						)
	}

	consultar(foto: FotoComponent){
		this.servico.consultar(foto._id)
						.subscribe(
							() => console.log(foto)
						)
	}

	ngOnInit() {
	}
}
