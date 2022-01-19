import { Prodotto } from "./Prodotto";
import { Sconto } from "./Sconto";

export interface ScontoProdotto{
    prodotto: Prodotto;
    sconto: Sconto;
}