
export class Curso {
    GUID: string;
    Nome: string;
    Tipo: string;
    Versoes: string;

    constructor(guid: string, nome: string, tipo: string) {
        this.GUID = guid;
        this.Nome = nome;
        this.Tipo = tipo;
    }
}