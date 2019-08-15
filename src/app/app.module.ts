import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { APPROUTING } from './app.routes';
import { HeroesService } from './servicios/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscardorComponent } from './components/buscardor/buscardor.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscardorComponent,
    HeroeTarjetaComponent
  ],
  /*aqui van todos los modulos */
  imports: [
    BrowserModule,
    APPROUTING
  ],
  /*aqui van todos los servicios */
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
