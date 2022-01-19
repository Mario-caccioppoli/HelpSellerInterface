import { Prodotto } from "./Prodotto";

export interface OrdineProdotto{
    idOrdine: number
    quantitaOrdine: number
    prezzoUnitario: number
    prodotto: Prodotto;
}