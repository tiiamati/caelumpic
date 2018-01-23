import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
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
