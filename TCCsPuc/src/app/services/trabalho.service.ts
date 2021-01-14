import { Injectable } from "@angular/core";
import trabalhos from './../../trabalhos.json';

@Injectable()
export class TrabalhoService {

    constructor() {
    }

    public GetAll() {
        return trabalhos;
    }

    public Get(curso) {
        let trabalhosFiltrados = this.GetAll().filter(x => x.Curso === curso);
        
        return trabalhosFiltrados;
    }
}