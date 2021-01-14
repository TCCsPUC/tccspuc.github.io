import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../../domain/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos-page',
  templateUrl: './cursos-page.component.html',
  styleUrls: ['./cursos-page.component.css']
})
export class CursosPageComponent implements OnInit {

  public cursos;

  constructor(private router: Router, private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursos =  this.cursoService.Get();
  }

  public onVerClick(curso) {
    debugger;
    this.router.navigate(['/trabalhos']);
  }
}