
export class Trabalho {
    Curso: string;
    Titulo: string;
    Descricao: string;
    Ano: number;
    URI: string;
    Autores: string;
    Nota: number;

    constructor(curso: string, titulo: string, descricao: string, ano: number, uri: string, autores: string, nota: number) {
        this.Curso = curso;
        this.Titulo = titulo;
        this.Descricao = descricao;
        this.Ano = ano;
        this.URI = uri;
        this.Autores = autores;
        this.Nota = nota;
    }

    public Aprovado(): boolean {
        return this.Nota >= this.notaMinima();
    }

    private notaMinima(): number {
        let notaMinima = 70;

        if (this.Ano > 2021)
            notaMinima = 80;

        return notaMinima;
    }
}