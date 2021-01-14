import { Injectable } from "@angular/core";
import { Curso } from "../domain/curso";
import { Trabalho } from "../domain/trabalho";

@Injectable()
export class CursoService {

    constructor() {
    }

    public GetAll() {
        let cursos: Array<Curso> = [];

        cursos.push(new Curso("Sistemas de Informação", 2016, "graduacao"))
        cursos.push(new Curso("Arquitetura de Software Distribuído", 2020, "posgraduacaols"))

        return cursos;
    }

    public Get(tipoCurso) {
        let cursos: Array<Curso> = [];

        cursos = this.GetAll().filter(x => x.Tipo === tipoCurso);

        debugger;
        return cursos;
    }
}