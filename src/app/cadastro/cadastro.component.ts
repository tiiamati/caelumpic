import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'cp-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()

  constructor() { 
    this.foto.titulo =  'oie'
  }

  ngOnInit() {
  }

  salvar(eventoSubmit: Event){
    eventoSubmit.preventDefault()
    console.log(eventoSubmit)
    console.log(this.foto)
  }

}
