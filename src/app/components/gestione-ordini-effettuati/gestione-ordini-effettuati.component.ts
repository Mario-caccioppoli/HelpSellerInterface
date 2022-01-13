import { Component, OnInit } from '@angular/core';
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

  constructor(private prod: OrdineService, private log: LogService) { }

  ngOnInit(): void {
    this.listaOrdini();
  }

  listaOrdini() {
    var x = this.prod.getAllOrdine.length;
    for (var count = 0; count <= x; count++) {
      this.prod.getAllOrdine().subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniEffettuatiComponent.name, "ok", [success]);
          this.singleOrdine = success as Ordine[];
        }, 
          
        (error) => {
          this.log.Error(GestioneOrdiniEffettuatiComponent.name, "errore", [error]);
        }
      )
    } //end for
  } //end func

}
