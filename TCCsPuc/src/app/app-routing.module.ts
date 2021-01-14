import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TrabalhosPageComponent } from './pages/trabalhos-page/trabalhos-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "cursos/:tipo",
    component: CursosPageComponent
  },
  {
    path: "trabalhos/:curso",
    component: TrabalhosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
