import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { Distributore } from 'src/app/models/Distributore';
import { Ordine } from 'src/app/models/Ordine';
import { Prodotto } from 'src/app/models/Prodotto';
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

  azienda: Azienda;

  myStorage = window.localStorage;

  cercaCodiceProdotto: string;
  cercaDataOrdine: string;
  cercaNomeDistributore: string;


  constructor(private os: OrdineService, private ps: ProdottoService, private ds: DistributoreService, private log: LogService) {  }

  ngOnInit(): void {
    this.myStorage.getItem('currentUser');
 
    if((this.myStorage.getItem('currentUser') != undefined) && this.checktypeAZ())
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
        },

        (error) => {
          this.log.Error(GestioneOrdiniRicevutiComponent.name, "errore", [error]);
        }
      )
  }

  cercaCodice(){
    this.ps.findAllProdottiByNome(this.cercaCodiceProdotto).subscribe(
      (resp)=>{
        this.log.Debug(GestioneOrdiniRicevutiComponent.name,"chiamata a back-end",[resp]);
        this.prodotti=resp;
      },
      (error)=>{
        this.log.Error(GestioneOrdiniRicevutiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

/*  cercaData(){
    this.os.findById(this.cercaDataOrdine).subscribe(
      (resp)=>{
        this.log.Debug(GestioneOrdiniRicevutiComponent.name,"chiamata a back-end",[resp]);
        this.ordini=resp;
      },
      (error)=>{
        this.log.Error(GestioneOrdiniRicevutiComponent.name,"chiamata a back-end",[error]);
      }
    )
  } 

  cercaDistributore(){
    this.ds.findById(this.cercaNomeDistributore).subscribe(
      (resp)=>{
        this.log.Debug(GestioneOrdiniRicevutiComponent.name,"chiamata a back-end",[resp]);
        this.distributori=resp;
      },
      (error)=>{
        this.log.Error(GestioneOrdiniRicevutiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }*/

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
