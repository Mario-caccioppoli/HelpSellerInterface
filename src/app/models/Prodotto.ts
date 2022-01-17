import { Recensione } from "./Recensione";
import { Sconto } from "./Sconto";

export interface Prodotto{
    id: number;
    nomeProdotto: string;
    prezzo: number;
    descrizione: string;
    quantita: number;
    immagine: string;
    quantitaMinima: number;
    peso: number;
    volume: number;
    idAzienda: number;
    recensioni: Recensione[];
    sconti?: Sconto[];
}