export class CartProduct {
    nome: string
    descrizione : string
    prezzo : string
    quantita: string

    constructor(nome: string, descrizione: string, prezzo: string, quantita: string){
        this.nome = nome
        this.descrizione = descrizione
        this.prezzo = prezzo
        this.quantita = quantita
    }

}
