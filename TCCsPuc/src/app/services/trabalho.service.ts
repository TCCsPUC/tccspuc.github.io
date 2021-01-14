import { Injectable } from "@angular/core";
import { Curso } from "../domain/curso";
import { Trabalho } from "../domain/trabalho";

@Injectable()
export class TrabalhoService {

    constructor() {
    }

    public Get() {
        let trabalhos: Array<Trabalho> = [];

        trabalhos.push(new Trabalho("Arquitetura de Software Distribuído",
            "Sistema de Gestão Ambiental para Empresas de Mineração",
            "- - -",
            2020,
            "https://github.com/TCCsPUC/Cursos/blob/main/PosGraduacao/ArquiteturaSoftwareDistribuido/2020/TCC%20-%20Guilherme%20Nunes%20Fontans.pdf",
            "Guilherme Nunes Fontans", null));

        trabalhos.push(new Trabalho("Arquitetura de Software Distribuído",
            "Sistema Integrado de Gestão de Qualidade Voltado ao Ramo Automotivo",
            "- - -",
            2020,
            "https://github.com/TCCsPUC/Cursos/blob/main/PosGraduacao/ArquiteturaSoftwareDistribuido/2020/TCC%20ANDRE%20LOPES%20RUSSO_e_VINICIUS_LOPES_RUSSO.pdf",
            "ANDRE LOPES RUSSO e VINICIUS LOPES RUSSO", null));

        return trabalhos;
    }
}