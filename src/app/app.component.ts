import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  template: `
    <header class="jumbotron">
      <h1 class="text-center">{{titulo}}</h1>
    </header>
    
    <main class="container">
      <painel *ngFor="let foto of listaFotos" titulo="{{foto.titulo}}">
        <foto  url="{{foto.url}}" titulo="{{foto.titulo}}"></foto>
      </painel>
    </main>
  `
  //styles: []
})

export class AppComponent {
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
}
