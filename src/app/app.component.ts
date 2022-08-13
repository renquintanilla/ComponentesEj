import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numeros: number[];
  titulos: string[];

  constructor(){
    this.numeros = [20, 15, 10, 5];
    this.titulos = ['Jurassic Park', 'King Kong', 'Jonh Wick'];
  }

  onTerminaCronometro($event) {
    console.log($event);
  }

  onAlertaPulsada($event) {
    console.log($event);
  }

}
