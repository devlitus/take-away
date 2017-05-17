import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
<<<<<<< HEAD
import { HomeComponent } from "./app/home/home.component";
import { ContactoComponent } from "./app/contacto/contacto.component";
import { GaleriaComponent } from "./app/galeria/galeria.component";
import { InfoComponent } from "./app/info/info.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'info', component: InfoComponent },
=======
import {  } from ".";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: AppComponent },
  // { path: 'home', component: HomeComponent },
  
>>>>>>> devel
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];
