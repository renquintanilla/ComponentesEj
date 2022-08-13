import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumarComponent } from './components/sumar/sumar.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { AlertaComponent } from './components/alerta/alerta.component';

@NgModule({
  declarations: [
    AppComponent,
    SumarComponent,
    CronometroComponent,
    EventosComponent,
    CalculadoraComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
