export interface Ordine{
    idOrdine: number;
    dataOrdinazione: Date;
    dataConsegna: Date;
    commento: string;
    stato: string;
    idDistributore: number;
    idOrdineProva: number;
}