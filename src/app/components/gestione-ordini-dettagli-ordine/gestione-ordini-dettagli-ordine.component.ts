import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';
import { Prodotto } from 'src/app/models/Prodotto';
import { Ordine } from 'src/app/models/Ordine';

import { Distributore } from 'src/app/models/Distributore';
import { DistributoreService } from 'src/app/services/distributore/distributore.service';
import { HttpClient } from '@angular/common/http';
import { Azienda } from 'src/app/models/Azienda';

@Component({
  selector: 'app-gestione-ordini-dettagli-ordine',
  templateUrl: './gestione-ordini-dettagli-ordine.component.html',
  styleUrls: ['./gestione-ordini-dettagli-ordine.component.css']
})
export class GestioneOrdiniDettagliOrdineComponent implements OnInit {

  allDistributore: Distributore[];
  distributore: Distributore;
  azienda: Azienda;
  ordineProdotto: OrdineProdotto;
  ordineProdottoArr: OrdineProdotto[];
  ordine: Ordine;

  quantitaTotale: number = 0;
  priceImponibile: number = 0;
  priceTotale: number = 0;

  constructor(private os: OrdineProdottoService, private ds: DistributoreService, private log: LogService) { }

  ngOnInit(): void {
   this.getProdottiOrdine();
   this.getInfoOrdine();
   this.getNotaRiepilogo();
  }

  getProdottiOrdine() {
    if(this.ordineProdotto != undefined)
    {
      this.os.findById(this.ordineProdotto.idOrdine).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);
          this.ordineProdotto = success as OrdineProdotto;
        },

        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    }
  }

  getInfoOrdine() {
    if(this.ordineProdotto != undefined)
    {
      this.ds.findById(this.ordineProdotto.idOrdine).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

          this.distributore = success as Distributore;
        },

        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    }
  }

  getNotaRiepilogo() {
    if(this.ordineProdotto != undefined)
    {
      this.os.findById(this.ordineProdotto.idOrdine).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);
          this.ordineProdotto = success as OrdineProdotto;
        },

        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    }
  }

  getAllOrdineQuantity() {
    if(this.ordine != undefined)
    {
      this.os.findDettagliOrdine(this.ordine.id).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

          var arrProdotti: OrdineProdotto[];

          arrProdotti.forEach( orderProduct => {
            this.quantitaTotale += orderProduct.quantitaOrdine;
          });

          this.ordineProdottoArr = success as OrdineProdotto[];
        },

        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    }
  }

  getVatOrdine() {
    if(this.ordineProdotto != undefined)
    {
      this.os.findById(this.ordineProdotto.idOrdine).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

          var vatD = this.distributore.vat;
          var vatA = this.azienda.vat;
          var vat: number = 0;

          this.ordineProdotto = success as OrdineProdotto;
        },

        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    }
  }

  getAllOrdinePrice() {
    if(this.ordine != undefined)
    {
      this.os.findDettagliOrdine(this.ordine.id).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

          var arrProdotti: OrdineProdotto[];

          arrProdotti.forEach( orderProduct => {
            this.priceImponibile += orderProduct.prezzoUnitario;
          });

          var vatPerc = this.getVatOrdine();

        //  var priceTotale = priceImponibile * vatPerc/100;

          this.ordineProdottoArr = success as OrdineProdotto[];
        },

        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    }
  }

  

        // var vat = this.os.getVatOrdinePerc(ordnumber); aggiungere funzionalità
        // var prezzoTotale = prezzoImponibile * vat/100;
}

