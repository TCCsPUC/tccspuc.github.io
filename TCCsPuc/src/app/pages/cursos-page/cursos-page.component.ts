import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos-page',
  templateUrl: './cursos-page.component.html',
  styleUrls: ['./cursos-page.component.css']
})
export class CursosPageComponent implements OnInit {

  public cursos;
  public tipoCurso;

  options: AnimationOptions = {
    path: '/assets/emptybox.json',
  };

  constructor(private router: Router, private cursoService: CursoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.obterParametros();
    this.cursos = this.cursoService.Get(this.tipoCurso);
  }

  public onVerClick(curso) {
    this.router.navigate(['trabalhos', curso]);
  }

  private obterParametros() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.tipoCurso = params['tipo'];
    });
  }
}