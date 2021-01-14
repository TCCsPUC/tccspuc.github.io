import { Injectable } from "@angular/core";
import cursos from './../../cursos.json';

@Injectable()
export class CursoService {

    constructor() {
    }

    public GetAll() {
        return cursos;
    }

    public Get(tipoCurso) {
        let cursosFiltrados = this.GetAll().filter(x => x.Tipo === tipoCurso);

        return cursosFiltrados;
    }
}