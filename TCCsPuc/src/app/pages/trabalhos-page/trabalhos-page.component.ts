import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { TrabalhoService } from '../../services/trabalho.service';
import { DataTablesOptions } from '../../utils/data-tables-utils';
import { Preferences } from '../../utils/preferences';

@Component({
  selector: 'app-trabalhos-page',
  templateUrl: './trabalhos-page.component.html',
  styleUrls: ['./trabalhos-page.component.css']
})
export class TrabalhosPageComponent implements OnInit {

  public trabalhos;
  public curso;
  public mostrarTabela: boolean = false;

  options: AnimationOptions = {
    path: '/assets/emptybox.json',
  };
  
  dtOptions: any;

  constructor(private trabalhoService: TrabalhoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mostrarTabela = Preferences.ObterPreferenciaExibicao();

    this.dtOptions = DataTablesOptions.PortuguesBrasil;
    this.obterParametros();
    this.trabalhos =  this.trabalhoService.Obter(this.curso);
  }

  public onAlterarVisualizacao(mostrarTabela) {

    this.mostrarTabela = mostrarTabela;

    Preferences.DefinirPreferenciaExibicao(this.mostrarTabela);
  }
  
  private obterParametros() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.curso = params['curso'];
    });
  }
}
