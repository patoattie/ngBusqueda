import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
