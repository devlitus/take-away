import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpModule, JsonpModule } from '@angular/http';
=======
import { HttpModule } from '@angular/http';
>>>>>>> devel
import { TakeService } from "./take.service";
import { AppRoutingModule } from "../appRouting";
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleriaComponent,
    ContactoComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    JsonpModule,
=======
>>>>>>> devel
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [TakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
