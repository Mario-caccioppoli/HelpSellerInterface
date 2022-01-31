import { Component, Input, OnInit } from '@angular/core';
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

  ordini: Ordine[];
  distributore: Distributore;
  idDistributore : number;
  myStorage = window.localStorage;

  constructor(private os: OrdineService, private log: LogService) { }

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
