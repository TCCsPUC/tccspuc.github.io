import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TrabalhoService } from '../../services/trabalho.service';

@Component({
  selector: 'app-trabalhos-page',
  templateUrl: './trabalhos-page.component.html',
  styleUrls: ['./trabalhos-page.component.css']
})
export class TrabalhosPageComponent implements OnInit {

  public trabalhos;
  public curso;

  constructor(private trabalhoService: TrabalhoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.obterParametros();
    this.trabalhos =  this.trabalhoService.Get();
  }

  private obterParametros() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.curso = params['curso'];
    });
  }
}
