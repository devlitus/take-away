import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TakeService } from "./take.service";
import { AppRoutingModule } from "../appRouting";
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent, ModaCarrito } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModaCarrito,
    GaleriaComponent,
    ContactoComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [TakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
