import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  contador: number;

  constructor() {
    this.contador = 12;
  }

  ngOnInit(): void {

  }

  onClick(){
    let interval = setInterval(() => {
      this.contador--;
    if (this.contador == 0) {
      clearInterval(interval);
    }
  }, 1000);
  }
}
