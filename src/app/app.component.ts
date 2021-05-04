import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numeros: number[];

  constructor(){
    this.numeros = [20, 15, 10, 5];
  }

  onTerminaCronometro($event) {
    console.log($event);
  }
}
