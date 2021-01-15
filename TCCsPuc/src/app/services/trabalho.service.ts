import { Injectable } from "@angular/core";
import trabalhos from './../../data/trabalhos.json';

@Injectable()
export class TrabalhoService {

    constructor() {
    }

    public ObterTodos() {
        return trabalhos;
    }

    public Obter(curso) {
        let trabalhosFiltrados = this.ObterTodos().filter(x => x.Curso === curso);
        return trabalhosFiltrados;
    }

    public ObterVersoes(curso) {
        let trabalhosFiltrados = this.Obter(curso);

        return trabalhosFiltrados.map(x => x.Ano).filter((value, index, self) => self.indexOf(value) === index)
    }
}