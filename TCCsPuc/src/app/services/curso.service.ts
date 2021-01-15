import { Injectable } from "@angular/core";
import cursos from './../../data/cursos.json';

@Injectable()
export class CursoService {

    constructor() {
    }

    public ObterTodos() {
        return cursos;
    }

    public Obter(tipoCurso) {
        let cursosFiltrados = this.ObterTodos().filter(x => x.Tipo === tipoCurso);

        return cursosFiltrados;
    }
}