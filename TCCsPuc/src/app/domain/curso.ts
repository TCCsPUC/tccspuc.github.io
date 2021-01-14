
export class Curso {
    GUID: string;
    Nome: string;
    Ano: number;
    Tipo: string;

    constructor(guid: string, nome: string, ano: number, tipo: string) {
        this.GUID = guid;
        this.Nome = nome;
        this.Ano = ano;
        this.Tipo = tipo;
    }
}