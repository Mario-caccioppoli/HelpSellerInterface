import { Azienda } from "./Azienda";
import { Documento } from "./Documento";
import { OrdineProdotto } from "./OrdineProdotto";
import { Prodotto } from "./Prodotto";

export interface Ordine{
    id: number;
    dataOrdinazione: Date;
    dataConsegna: Date;
    commento?: string;
    stato: string;
    idDistributore: number;
    nomeDistributore?: string;
    documento?: Documento;
    prezzoTotale?: number;
    ordineProdotti?:OrdineProdotto[];
    azienda?: Azienda;
}