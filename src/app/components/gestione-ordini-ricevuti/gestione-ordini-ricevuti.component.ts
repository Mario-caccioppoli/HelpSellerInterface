import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { Ordine } from 'src/app/models/Ordine';
import { LogService } from 'src/app/services/log.service';
import { OrdineService } from 'src/app/services/ordine/ordine.service';

@Component({
  selector: 'app-gestione-ordini-ricevuti',
  templateUrl: './gestione-ordini-ricevuti.component.html',
  styleUrls: ['./gestione-ordini-ricevuti.component.css']
})
export class GestioneOrdiniRicevutiComponent implements OnInit {

  ordini: Ordine[];
  azienda: Azienda;

  myStorage = window.localStorage;

  constructor(private prod: OrdineService, private log: LogService) {  }

  ngOnInit(): void {
    this.myStorage.getItem('currentUser');
 
    if((this.myStorage.getItem('currentUser') != undefined) && this.checktypeAZ())
    {
      this.azienda = JSON.parse(this.myStorage.getItem('currentUser')) as Azienda;
      this.listaOrdini();
    }
  }

  listaOrdini() {
      this.prod.getAllOrdinebyAzienda(this.azienda.id).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniRicevutiComponent.name, "ok", [success]);
          this.ordini = success as Ordine[];
        },

        (error) => {
          this.log.Error(GestioneOrdiniRicevutiComponent.name, "errore", [error]);
        }
      )
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
