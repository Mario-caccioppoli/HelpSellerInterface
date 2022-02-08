import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { Distributore } from 'src/app/models/Distributore';
import { Ordine } from 'src/app/models/Ordine';
import { Prodotto } from 'src/app/models/Prodotto';
import { Utente } from 'src/app/models/Utente';
import { DistributoreService } from 'src/app/services/distributore/distributore.service';
import { LogService } from 'src/app/services/log.service';
import { OrdineService } from 'src/app/services/ordine/ordine.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

@Component({
  selector: 'app-gestione-ordini-ricevuti',
  templateUrl: './gestione-ordini-ricevuti.component.html',
  styleUrls: ['./gestione-ordini-ricevuti.component.css']
})
export class GestioneOrdiniRicevutiComponent implements OnInit {

  ordini: Ordine[];
  prodotti: Prodotto[];
  distributori: Distributore[];
  ordine: Ordine;
  ordiniToDisplay:Ordine[];

  azienda: Azienda;
  distributore: Distributore;
  nomeDistributore:string[];

  myStorage = window.localStorage;

  cercaCodiceOrdine: number;
  cercaDataOrdine: string;
  cercaNomeDistributore: string;

  constructor(private os: OrdineService, private ps: ProdottoService, private ds: DistributoreService, private log: LogService) {  }

  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"));
  ngOnInit(): void {
 
    if((this.myStorage.getItem('currentUser') != undefined) && this.currentUser.tipo=='Azienda')
    {
      this.azienda = JSON.parse(this.myStorage.getItem('currentUser')) as Azienda;
      this.listaOrdini();
    }
  }

  listaOrdini() {
      this.os.getAllOrdinebyAzienda(this.azienda.id).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniRicevutiComponent.name, "ok", [success]);
          this.ordini = success as Ordine[];
          this.ordiniToDisplay=this.ordini;
          //this.ordini.forEach(p=>this.nomeDistributore.push(p.nomeDistributore))
        },

        (error) => {
          this.log.Error(GestioneOrdiniRicevutiComponent.name, "errore", [error]);
        }
      )
  }

  cercaCodice(){
    if (this.cercaCodiceOrdine == 0) {
      this.listaOrdini();
    } else {
    this.os.findById(this.cercaCodiceOrdine).subscribe(
      (success)=>{
        this.log.Debug(GestioneOrdiniRicevutiComponent.name,"chiamata a back-end",[success]);
        var ordineCercato: Ordine; var ordineArray: Ordine[] = [];
        ordineCercato = success as Ordine;
        ordineArray.push(ordineCercato);
        this.ordini = ordineArray as Ordine[];
      },
      (error)=>{
        this.log.Error(GestioneOrdiniRicevutiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }
}

  cercaData(){
    if (this.cercaDataOrdine == '') {
      this.listaOrdini();
    } else if (this.cercaDataOrdine.length != 4){ }
    else if (this.cercaDataOrdine.length == 4) {
    this.os.getAllOrdinebyAzienda(this.azienda.id).subscribe(
      (success)=>{
        this.log.Debug(GestioneOrdiniRicevutiComponent.name,"chiamata a back-end",[success]);
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
        this.log.Error(GestioneOrdiniRicevutiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }
}


  cercaDistributore(){
    var filter=this.cercaNomeDistributore.toLocaleLowerCase();
    if(filter!=undefined){
      this.ordiniToDisplay=this.ordini.filter(p=>p.nomeDistributore.toLocaleLowerCase().includes(filter));
    }
  //   if (this.cercaNomeDistributore == '') {
  //     this.listaOrdini();
  //   } else {
  //   this.os.findById(this.ordine.idDistributore).subscribe(
  //     (success)=>{
  //       this.log.Debug(GestioneOrdiniRicevutiComponent.name,"chiamata a back-end",[success]);
  //       var ordineCercato: Ordine; var ordineArray: Ordine[] = [];
  //       ordineCercato = success as Ordine;
  //       ordineArray.push(ordineCercato);
  //       this.ordini = ordineArray as Ordine[];
  //     },
  //     (error)=>{
  //       this.log.Error(GestioneOrdiniRicevutiComponent.name,"chiamata a back-end",[error]);
  //     }
  //   )
  // }
}

  checktypeAZ() {
    const account = this.myStorage.getItem('currentUser');
    const obj = JSON.parse(account);
    const tipo = obj.tipo;
    if (tipo == "Azienda") {
      return true;
    } else {
      return false;
    }
  }

}
