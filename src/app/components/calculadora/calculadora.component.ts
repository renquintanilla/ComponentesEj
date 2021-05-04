import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  resultado: string;
  calculoFinalizado: boolean;

  constructor() {
    this.resultado = '';
    this.calculoFinalizado = false;
  }

  ngOnInit(): void {
  }

  //onClick($event) {
  //  if (this.calculoFinalizado) {
  //    this.resultado = $event.target.innerText;
  //    this.calculoFinalizado = false;
  //  } else{
  //  this.resultado += $event.target.innerText;
  //  }
  //}

  onClick(pValue) { //Otro método con el mismo resultado que el anterior
    //Solo que ahora pasamo directamente el valor del botón
    if (this.calculoFinalizado) {
      this.resultado = pValue;
      this.calculoFinalizado = false;
    } else{
    this.resultado += pValue;
    }
  }

  onResultado() {
    this.resultado = eval(this.resultado);
    this.calculoFinalizado = true;
  }
}
