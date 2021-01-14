import { Injectable } from "@angular/core";
import trabalhos from './../../trabalhos.json';

@Injectable()
export class TrabalhoService {

    constructor() {
    }

    public Get() {
        return trabalhos;
    }
}