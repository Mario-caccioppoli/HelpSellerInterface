import { Component, Input, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { Distributore } from 'src/app/models/Distributore';
import { Ordine } from 'src/app/models/Ordine';
import { Prodotto } from 'src/app/models/Prodotto';
import { AziendaService } from 'src/app/services/azienda/azienda.service';
import { LogService } from 'src/app/services/log.service';
import { OrdineService } from 'src/app/services/ordine/ordine.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

@Component({
  selector: 'app-gestione-ordini-effettuati',
  templateUrl: './gestione-ordini-effettuati.component.html',
  styleUrls: ['./gestione-ordini-effettuati.component.css']
})
export class GestioneOrdiniEffettuatiComponent implements OnInit {

  ordini: Ordine[];
  aziende: Azienda[];
  prodotti: Prodotto[];
  distributore: Distributore;
  ordine: Ordine;
  idDistributore : number;
  myStorage = window.localStorage;

  cercaCodiceOrdine: number;
  cercaDataOrdine: string;
  cercaNomeAzienda: string;

  constructor(private os: OrdineService, private ps: ProdottoService, private as: AziendaService, private log: LogService) { }

  ngOnInit(): void {
    this.myStorage.getItem('currentUser');
 
    if((this.myStorage.getItem('currentUser') != undefined) && this.checktypeD())
    {
      this.distributore = JSON.parse(this.myStorage.getItem('currentUser')) as Distributore;
      this.listaOrdini();
    }
  }

  listaOrdini() {
      this.os.getAllOrdinebyDistributore(this.distributore.id).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniEffettuatiComponent.name, "ok", [success]);

          this.ordini = success as Ordine[];
        },
        (error) => {
          this.log.Error(GestioneOrdiniEffettuatiComponent.name, "errore", [error]);
        }
      )
  }

  cercaCodice(){
    if (this.cercaCodiceOrdine == 0) {
      this.listaOrdini();
    } else {
    this.os.findById(this.cercaCodiceOrdine).subscribe(
      (success)=>{
        this.log.Debug(GestioneOrdiniEffettuatiComponent.name,"chiamata a back-end",[success]);
        var ordineCercato: Ordine; var ordineArray: Ordine[] = [];
        ordineCercato = success as Ordine;
        ordineArray.push(ordineCercato);
        this.ordini = ordineArray as Ordine[];
      },
      (error)=>{
        this.log.Error(GestioneOrdiniEffettuatiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }
}

  cercaData(){
    if (this.cercaDataOrdine == '') {
      this.listaOrdini();
    } else if (this.cercaDataOrdine.length != 4){ }
    else if (this.cercaDataOrdine.length == 4) {
    this.os.getAllOrdinebyDistributore(this.distributore.id).subscribe(
      (success)=>{
        this.log.Debug(GestioneOrdiniEffettuatiComponent.name,"chiamata a back-end",[success]);
        var ordiniRisultati: Ordine[]; let ordineArray: Ordine[] = [];
        ordiniRisultati = success as Ordine[];
        var i: number = 0;
        
        for(i=0; i<=ordiniRisultati.length; i++) {
          var datastringa: string = '';
          datastringa = ordiniRisultati[i].dataOrdinazione.toString();
          var anno = datastringa.slice(0,4);
          if (anno == this.cercaDataOrdine) {
            ordineArray.push(ordiniRisultati[i]);
            this.ordini = ordineArray;
          }
        }
      },
      (error)=>{
        this.log.Error(GestioneOrdiniEffettuatiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }
}

  cercaAzienda(){
    if (this.cercaNomeAzienda == '') {
      this.listaOrdini();
    } else {
    this.as.findAziendeByName(this.cercaNomeAzienda).subscribe(
      (success)=>{
        this.log.Debug(GestioneOrdiniEffettuatiComponent.name,"chiamata a back-end",[success]);
        this.aziende = success as Azienda[];
      },
      (error)=>{
        this.log.Error(GestioneOrdiniEffettuatiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }
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
