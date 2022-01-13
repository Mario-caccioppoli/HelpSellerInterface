import { Component, OnInit } from '@angular/core';
import { Ordine } from 'src/app/models/Ordine';
import { LogService } from 'src/app/services/log.service';
import { OrdineService } from 'src/app/services/ordine/ordine.service';

@Component({
  selector: 'app-gestione-ordini-ricevuti',
  templateUrl: './gestione-ordini-ricevuti.component.html',
  styleUrls: ['./gestione-ordini-ricevuti.component.css']
})
export class GestioneOrdiniRicevutiComponent implements OnInit {

  allOrdine: Ordine[];

  constructor(private prod: OrdineService, private log: LogService) {  }

  ngOnInit(): void {
    this.listaOrdini();
  }

  listaOrdini() {
      this.prod.getAllOrdine().subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniRicevutiComponent.name, "ok", [success]);
          this.allOrdine = success as Ordine[];
        }, 
          
        (error) => {
          this.log.Error(GestioneOrdiniRicevutiComponent.name, "errore", [error]);
        }
      )
  } //end func

}
