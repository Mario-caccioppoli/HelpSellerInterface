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
  prodotto: Prodotto;
  ordine: Ordine;

  constructor(private os: OrdineProdottoService, private ds: DistributoreService, private log: LogService) { }

  ngOnInit(): void {
   this.getProdottiOrdine();
   this.getInfoOrdine();
   this.getNotaRiepilogo();
   this.documentiFunction();
  }

  getProdottiOrdine() {
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

  getInfoOrdine() {
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

  getNotaRiepilogo() {
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

  getAllOrdineQuantity() {
    this.os.findDettagliOrdine(this.ordine.id).subscribe(
      (success) => {
        this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

        var arrProdotti: OrdineProdotto[];
        var quantitaTotale = 0;
        
        arrProdotti.forEach( orderProduct => {
          quantitaTotale += orderProduct.quantitaOrdine;
        });

        this.ordineProdottoArr = success as OrdineProdotto[];
      }, 
        
      (error) => {
        this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
      }
    )
  }

  documentiFunction() { //todo
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

  getAllOrdinePrice() {
    this.os.findDettagliOrdine(this.ordine.id).subscribe(
      (success) => {
        this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

        var arrProdotti: OrdineProdotto[];
        var quantitaTotale = 0;
        
        arrProdotti.forEach( orderProduct => {
          quantitaTotale += orderProduct.prezzoUnitario;
        });

        this.ordineProdottoArr = success as OrdineProdotto[];
      }, 
        
      (error) => {
        this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
      }
    )
  }

  getVatOrdine() {
    this.os.findById(this.ordineProdotto.idOrdine).subscribe(
      (success) => {
        this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);

        var vatD = this.distributore.vat;
        var vatA= this.azienda.vat;

        this.ordineProdotto = success as OrdineProdotto;
      }, 
        
      (error) => {
        this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
      }
    )
  }


        // var vat = this.os.getVatOrdinePerc(ordnumber); aggiungere funzionalità
        // var prezzoTotale = prezzoImponibile * vat/100;
}

