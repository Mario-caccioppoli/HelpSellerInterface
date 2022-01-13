export interface Ordine{
    id: number;
    dataOrdinazione: Date;
    dataConsegna: Date;
    commento: string;
    stato: string;
    idDistributore: number;
    idOrdineProva: number;
}