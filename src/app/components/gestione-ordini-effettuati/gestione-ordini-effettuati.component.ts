import { Component, Input, OnInit } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { Distributore } from 'src/app/models/Distributore';
import { Ordine } from 'src/app/models/Ordine';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { LogService } from 'src/app/services/log.service';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';
import { OrdineService } from 'src/app/services/ordine/ordine.service';

@Component({
  selector: 'app-gestione-ordini-effettuati',
  templateUrl: './gestione-ordini-effettuati.component.html',
  styleUrls: ['./gestione-ordini-effettuati.component.css']
})
export class GestioneOrdiniEffettuatiComponent implements OnInit {

  singleOrdine: Ordine[];
  distributore: Distributore;
  ordineProdotto: OrdineProdotto[];
  ordine: Ordine;
  myStorage = window.localStorage;

  prezzoTotale: number = 0;

  constructor(private os: OrdineService, private ops: OrdineProdottoService, private log: LogService) { }

  ngOnInit(): void {
    this.myStorage.getItem('currentUser');
 
    if((this.myStorage.getItem('currentUser') != undefined) && this.checktypeD())
    {
      this.distributore = JSON.parse(this.myStorage.getItem('currentUser')) as Distributore;
      this.listaOrdini();
    }
  }

  prezzoOrdine(ord) {
    this.ops.findDettagliOrdine(ord).subscribe(
      (success) => {
        this.log.Debug(GestioneOrdiniEffettuatiComponent.name, "ok", [success]);

        this.ordineProdotto = success as OrdineProdotto[];
        
        var quantitaSingola; var prezzoSingolo; var prezzoQuantita; var totalPrice = 0;
        
        for (var i=0; i<=this.ordineProdotto.length; i++) {
          quantitaSingola = this.ordineProdotto[i].quantitaOrdine;
          prezzoSingolo = this.ordineProdotto[i].prezzoUnitario;
          prezzoQuantita = quantitaSingola * prezzoSingolo;
          totalPrice += prezzoQuantita;
        }

        this.prezzoTotale = totalPrice;

      },

      (error) => {
        this.log.Error(GestioneOrdiniEffettuatiComponent.name, "errore", [error]);
      }
    )
}

  listaOrdini() {
      this.os.getAllOrdinebyDistributore(this.distributore.id).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniEffettuatiComponent.name, "ok", [success]);

          for (var k=0; k<=this.ordineProdotto.length; k++) {
            this.prezzoOrdine(this.ordine.id)
          }

          this.singleOrdine = success as Ordine[];
        },

        (error) => {
          this.log.Error(GestioneOrdiniEffettuatiComponent.name, "errore", [error]);
        }
      )
  }

  checktypeD() {
    const account = this.myStorage.getItem('currentUser');
    const obj = JSON.parse(account);
    const tipo = obj.tipo;
    if (tipo == "Distributore") {
      return true;
    } else {
      return false;
    }
  }

}
