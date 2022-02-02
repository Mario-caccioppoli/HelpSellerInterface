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
  idDistributore : number;
  myStorage = window.localStorage;

  cercaCodiceProdotto: string;
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
    this.ps.findAllProdottiByNome(this.cercaCodiceProdotto).subscribe(
      (resp)=>{
        this.log.Debug(GestioneOrdiniEffettuatiComponent.name,"chiamata a back-end",[resp]);
        this.prodotti=resp;
      },
      (error)=>{
        this.log.Error(GestioneOrdiniEffettuatiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

/*  cercaData(){
    this.os.findById(this.cercaDataOrdine).subscribe(
      (resp)=>{
        this.log.Debug(GestioneOrdiniEffettuatiComponent.name,"chiamata a back-end",[resp]);
        this.ordini=resp;
      },
      (error)=>{
        this.log.Error(GestioneOrdiniEffettuatiComponent.name,"chiamata a back-end",[error]);
      }
    )
  } */

  cercaAzienda(){
    this.as.findAziendeByName(this.cercaNomeAzienda).subscribe(
      (resp)=>{
        this.log.Debug(GestioneOrdiniEffettuatiComponent.name,"chiamata a back-end",[resp]);
        this.aziende=resp;
      },
      (error)=>{
        this.log.Error(GestioneOrdiniEffettuatiComponent.name,"chiamata a back-end",[error]);
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
