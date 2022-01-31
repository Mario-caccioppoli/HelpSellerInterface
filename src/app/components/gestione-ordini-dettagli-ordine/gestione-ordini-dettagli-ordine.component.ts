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
  price: number = 0;

  constructor(private os: OrdineProdottoService, private ds: DistributoreService, private log: LogService) { }

  ngOnInit(): void {
    if(this.ordineProdotto != undefined) {
      this.getProdottibyOrdine();
      this.getInfoOrdine();
      this.getNotaRiepilogo();
    }
  }

  getProdottibyOrdine() {
    if(this.ordine != undefined)
    {
      this.os.findDettagliOrdine(this.ordine.id).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);
          this.ordineProdottoArr = success as OrdineProdotto[];
        },

        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    } else {alert('non definito')};
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

  getAllOrdinePrice() {
    if(this.ordine != undefined)
    {
      this.os.findDettagliOrdine(this.ordine.id).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

          var arrProdotti: OrdineProdotto[];

          arrProdotti.forEach( orderProduct => {
            this.price += orderProduct.prezzoUnitario;
          });

          this.ordineProdottoArr = success as OrdineProdotto[];
        },

        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    }
  }

}

