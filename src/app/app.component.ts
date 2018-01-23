import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  template: `

    <header class="jumbotron">
      <h1 class="text-center">{{titulo}}</h1>
    </header>
    
    <main class="container">
      {{fotos}}
      <foto url="./assets/img/img.jpg" titulo="eita"></foto>
      <foto url="./assets/img/img2.jpg" titulo="eita2"></foto>
      <foto url="./assets/img/img3.jpg" titulo="eita3"></foto>
    </main>
  `
  //styles: []
})

export class AppComponent {
  titulo = 'Caelumpic'
  fotos = []
  
  constructor(ajax: Http){
    
    ajax.get('http://localhost:3000/v1/fotos')
      .subscribe(
        resp => {
          this.fotos = resp.json()
        }
      )
  }
}
