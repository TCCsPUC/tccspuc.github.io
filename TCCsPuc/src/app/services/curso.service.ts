import { Injectable } from "@angular/core";
import { Curso } from "../domain/curso";
import { Trabalho } from "../domain/trabalho";

@Injectable()
export class CursoService {

    constructor() {
    }

    public Get() {
        let cursos: Array<Curso> = [];

        cursos.push(new Curso("Arquitetura de Software Distribuído", 2020))

        return cursos;
    }
}