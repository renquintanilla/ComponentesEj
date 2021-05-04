import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensaje: string;

  constructor() {
    this.mensaje = 'Este es el mensaje inicial';
  }

  ngOnInit(): void {

  }

  onClick($event: any){
    console.log('Se ha pulsado un botón');
    console.log($event);
  }

  onChange($event){
    console.log($event.target.value);


  }

  onMouseEnter() {
    this.mensaje ='Estoy dentro del div';
  }

  onMouseOut() {
    this.mensaje ='Estoy fuera del div';
  }

  onChangeInput($event) {
    //console.log($event.target.value);
  }

  onInput($event) {
    console.log($event.target.value);
    this.mensaje = $event.target.value;
  }

  onFocus() {
    console.log("Recibe el Enfoque");
  }

  onBlur() {
    console.log("Pierde el Enfoque");
  }
}
