export interface Recensione{
    id: number;
    testo: string;
    voto: number;
    data: Date;
    idProdotto: number;
    idDistributore: number;
}