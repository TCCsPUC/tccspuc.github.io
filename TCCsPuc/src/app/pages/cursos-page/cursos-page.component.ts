import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { CursoService } from '../../services/curso.service';
import { TrabalhoService } from '../../services/trabalho.service';
import { DataTablesOptions } from '../../utils/data-tables-utils';
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

  constructor(private router: Router, private cursoService: CursoService,
    private trabalhoService: TrabalhoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mostrarTabela = Preferences.ObterPreferenciaExibicao();

    this.dtOptions = DataTablesOptions.PortuguesBrasil;
    this.obterParametros();
    this.cursos = this.cursoService.Obter(this.tipoCurso);

    this.cursos.forEach((value, index) => {
      value.Versoes = this.trabalhoService.ObterVersoes(value.GUID);
    });
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