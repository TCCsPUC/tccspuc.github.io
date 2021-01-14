import { Injectable } from "@angular/core";
import { Curso } from "../domain/curso";
import cursos from './../../cursos.json';

@Injectable()
export class CursoService {

    constructor() {
    }

    public GetAll() {
        return cursos;
    }

    public Get(tipoCurso) {
        let cursos: Array<Curso> = [];

        cursos = this.GetAll().filter(x => x.Tipo === tipoCurso);

        return cursos;
    }
}