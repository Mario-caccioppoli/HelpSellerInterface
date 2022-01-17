import { Prodotto } from "./Prodotto";

export interface Sconto{
    id: number;
    percentuale: number;
    dataInizio: Date;
    dataFine: Date;
    tipo: string;
    quantita: number;
    idAzienda: number;
    prodotti: Prodotto[];
}