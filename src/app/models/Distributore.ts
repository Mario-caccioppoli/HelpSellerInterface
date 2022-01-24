import { Ordine } from "./Ordine";

export interface Distributore{
    id: number;
    username: string;
    email: string;
    password: string;
    nome: string;
    cognome: string;
    vat: string;
    telefono: string;
    indirizzoSede: string;
    idOrdineProva: number;
    ordini: Ordine[];
}