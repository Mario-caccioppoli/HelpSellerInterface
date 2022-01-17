import { Documento } from "./Documento";

export interface Ordine{
    id: number;
    dataOrdinazione: Date;
    dataConsegna: Date;
    commento: string;
    stato: string;
    idDistributore: number;
    idOrdineProva: number;
    documento: Documento;
    prezzoTotale: number;
}