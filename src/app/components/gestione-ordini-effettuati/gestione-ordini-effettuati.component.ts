import { Component, Input, OnInit } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { Distributore } from 'src/app/models/Distributore';
import { Ordine } from 'src/app/models/Ordine';
import { LogService } from 'src/app/services/log.service';
import { OrdineService } from 'src/app/services/ordine/ordine.service';

@Component({
  selector: 'app-gestione-ordini-effettuati',
  templateUrl: './gestione-ordini-effettuati.component.html',
  styleUrls: ['./gestione-ordini-effettuati.component.css']
})
export class GestioneOrdiniEffettuatiComponent implements OnInit {

  singleOrdine: Ordine[];
  distributore: Distributore;

  constructor(private prod: OrdineService, private log: LogService) { }

  ngOnInit(): void {
    //this.distributore =  JSON.parse(localStorage.getItem("IDutente")) as Distributore;
    if(this.distributore != undefined)
    {
      this.listaOrdini();
    }
  }

  listaOrdini() {
      this.prod.getAllOrdinebyDistributore(this.distributore.id).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniEffettuatiComponent.name, "ok", [success]);
          this.singleOrdine = success as Ordine[];
        },

        (error) => {
          this.log.Error(GestioneOrdiniEffettuatiComponent.name, "errore", [error]);
        }
      )
  } //end func

}
