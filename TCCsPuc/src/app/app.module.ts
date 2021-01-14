import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';
import { TrabalhosPageComponent } from './pages/trabalhos-page/trabalhos-page.component';
import { CursoService } from './services/curso.service';
import { TrabalhoService } from './services/trabalho.service';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CursosPageComponent,
    TrabalhosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [LottieModule.forRoot({ player: playerFactory })]
  ],
  providers: [CursoService, TrabalhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
