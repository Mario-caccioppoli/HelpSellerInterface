import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';

import { Prodotto } from 'src/app/models/Prodotto';

import { Distributore } from 'src/app/models/Distributore';
import { DistributoreService } from 'src/app/services/distributore/distributore.service';

@Component({
  selector: 'app-gestione-ordini-dettagli-ordine',
  templateUrl: './gestione-ordini-dettagli-ordine.component.html',
  styleUrls: ['./gestione-ordini-dettagli-ordine.component.css']
})
export class GestioneOrdiniDettagliOrdineComponent implements OnInit {

  allDistributore: Distributore[];
  distributore: Distributore;
  ordineprodotto: OrdineProdotto;
  prodotto: Prodotto;

  constructor(private os?: OrdineProdottoService, private ds?: DistributoreService, private log?: LogService) { }

  ngOnInit(): void {
   this.riepilogoOrdine();
   this.getAcquirente();
   this.getNotaRiepilogo();
  }

  riepilogoOrdine() {
    if (this.ordineprodotto != undefined) {
      this.os.findById(this.ordineprodotto.idOrdine).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);
          this.ordineprodotto = success as OrdineProdotto;
        },

        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    }
  }

  getAcquirente() {
    this.ds.findById(0).subscribe(
      (success) => {
        this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

        this.distributore = success as Distributore;
      },

      (error) => {
        this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
      }
    )
  }

  getNotaRiepilogo() {
    if(this.ordineprodotto != undefined)
    {
      this.os.findById(this.ordineprodotto.idOrdine).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);alert('jhhh');
          var arrProdotti = this.os.getAllOrdineProdotto(); //get all prodotti
          var totale = 0;
          for(var i in arrProdotti) {
            totale = totale + this.ordineprodotto.prodotto.prezzo[i];
          }
          this.ordineprodotto = success as OrdineProdotto;
        },

        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    }
  }
}

