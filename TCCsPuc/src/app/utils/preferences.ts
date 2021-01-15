
export class Preferences {

    constructor(){}

    public static DefinirPreferenciaExibicao(mostrarTabela: boolean) {
        localStorage.setItem('mostrarTabela', JSON.stringify(mostrarTabela));
    }

    public static ObterPreferenciaExibicao(): boolean {
        return JSON.parse(localStorage.getItem('mostrarTabela'));
    }
}