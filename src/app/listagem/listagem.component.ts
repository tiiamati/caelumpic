import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'cp-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  
  titulo = 'Caelumpic'
  listaFotos = []
  
  constructor(ajax: Http){
    
    ajax.get('http://localhost:3000/v1/fotos')
      .subscribe(
        resp => {
          this.listaFotos = resp.json()
        }
      )
  }

  ngOnInit() {
  }
}
