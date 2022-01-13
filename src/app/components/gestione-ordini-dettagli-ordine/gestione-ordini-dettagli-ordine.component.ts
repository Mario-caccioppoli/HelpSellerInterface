import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';

import { Prodotto } from 'src/app/models/Prodotto';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

import { Distributore } from 'src/app/models/Distributore';
import { DistributoreService } from 'src/app/services/distributore/distributore.service';

import { Ordine } from 'src/app/models/Ordine';
import { OrdineService } from 'src/app/services/ordine/ordine.service';

@Component({
  selector: 'app-gestione-ordini-dettagli-ordine',
  templateUrl: './gestione-ordini-dettagli-ordine.component.html',
  styleUrls: ['./gestione-ordini-dettagli-ordine.component.css']
})
export class GestioneOrdiniDettagliOrdineComponent implements OnInit {

  singleProd: OrdineProdotto[];
  singleDistributore: Distributore[];
  singleOrd: OrdineService;

  constructor(private prod: ProdottoService, private log: LogService) { }

  ngOnInit(): void {
    //this.riepilogoOrdine();
  }

 /*  riepilogoOrdine() {
   var i = this.singleOrd.getAllOrdine(0)
      this.prod.getProdottiByOrdine(this.singleOrd.findId(i)).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

          this.singleProd = success as OrdineProdotto[];
        }, 
          
        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    } //end for
/*
  infoAcquirente() {
    this.prod.getProdottiByOrdine(0).subscribe(
      (success) => {
        this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

        this.singleProd = success as Prodotto[];
      }, 
        
      (error) => {
        this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
      }
    )
  }

  infoOrdine() {
    this.prod.getProdottiByOrdine(0).subscribe(
      (success) => {
        this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

        this.singleProd = success as Prodotto[];
      }, 
        
      (error) => {
        this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
      }
    )
  }
*/
}
