import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { Distributore } from 'src/app/models/Distributore';
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
  azienda: Azienda;

  constructor(private prod: OrdineService, private log: LogService) {  }

  ngOnInit(): void {
    this.listaOrdini();
  }

  listaOrdini() {
      this.prod.getAllOrdinebyAzienda(this.azienda.id).subscribe(
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
