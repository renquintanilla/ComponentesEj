import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  @Input('texto') mensaje: string;
  @Input() subTitulo: string;
  
  @Output() alertaPulsada: EventEmitter<string>;

  constructor() { 
    this.mensaje = 'Mensaje de la alerta por defecto';
    this.subTitulo = 'Valor del subtítulo';

    this.alertaPulsada = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.mensaje);
    
  }

  onClick() {
    this.alertaPulsada.emit('Del hijo al padre');
  }

 

}
