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

  allOrdine: Ordine[];
  allDistributore: Distributore[];
  ordine: Ordine;
  distributore: Distributore;

  constructor(private prod: OrdineService, private log: LogService) { }

  ngOnInit(): void {
    this.riepilogoOrdine();
  }

 riepilogoOrdine() {
      this.prod.getAllOrdinebyAzienda(this.ordine.id).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

          this.singleOrdine = success as Ordine[];
        }, 
          
        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    } //end for

  infoAcquirente() {
    this.distributore.id.subscribe(
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
