import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() inicio: number;

  @Output() terminaCronometro: EventEmitter<string>;
  contador: number;

  constructor() {
    this.contador = 12;
    this.terminaCronometro = new EventEmitter();
  }

  ngOnInit(): void {
    this.contador = this.inicio ? this.inicio : 10;
  }

  onClick(){
    let interval = setInterval(() => {
      this.contador--;
    if (this.contador < 0) {
      clearInterval(interval);
      this.contador = this.inicio;
      this.terminaCronometro.emit('Termina cronómetro con número '
      + this.inicio);
    }
  }, 1000);
  }
}
