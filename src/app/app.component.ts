import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numeros: number[];
  titulos: string[];

  campoTexto: string;
  persona: any;

  constructor(){
    this.numeros = [20, 15, 10, 5];
    this.titulos = ['Jurassic Park', 'King Kong', 'Jonh Wick'];
    
    this.campoTexto = 'Valor Inicial';
    this.persona = {};   /* Lo inicializo como un objeto */
  }

  onTerminaCronometro($event) {
    console.log($event);
  }

  onAlertaPulsada($event) {
    console.log($event);
  }

  onClick() {
    this.campoTexto = 'Otro valor al inicial';
  }

}
