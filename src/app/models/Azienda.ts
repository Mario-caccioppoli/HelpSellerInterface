import { Ordine } from "./Ordine";
import { Prodotto } from "./Prodotto";

export interface Azienda{
    id: number;
    email: string;
    password: string;
    nomeAzienda: string;
    vat: string;
    indirizzo: string;
    descrizione: string;
    logo: string;
    prodotti: Prodotto[];
    ordini: Ordine[];
    logoBlob?:any;
}