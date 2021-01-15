import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { CursoService } from '../../services/curso.service';
import { DataTablesOptions } from '../../utils/data-tables-utils';
import { Subject } from 'rxjs';
import { Preferences } from '../../utils/preferences';

@Component({
  selector: 'app-cursos-page',
  templateUrl: './cursos-page.component.html',
  styleUrls: ['./cursos-page.component.css']
})
export class CursosPageComponent implements OnInit {

  public cursos;
  public tipoCurso;
  public mostrarTabela: boolean = false;

  options: AnimationOptions = {
    path: '/assets/emptybox.json',
  };

  dtOptions: any;

  constructor(private router: Router, private cursoService: CursoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mostrarTabela = Preferences.ObterPreferenciaExibicao();

    this.dtOptions = DataTablesOptions.PortuguesBrasil;
    this.obterParametros();
    this.cursos = this.cursoService.Get(this.tipoCurso);

  }

  public onVerClick(curso) {
    this.router.navigate(['trabalhos', curso]);
  }

  public onAlterarVisualizacao(mostrarTabela) {

    this.mostrarTabela = mostrarTabela;

    Preferences.DefinirPreferenciaExibicao(this.mostrarTabela);
  }

  private obterParametros() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.tipoCurso = params['tipo'];
    });
  }
}