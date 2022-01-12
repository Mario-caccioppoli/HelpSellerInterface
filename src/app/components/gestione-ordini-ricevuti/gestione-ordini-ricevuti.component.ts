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

  ordtest: Ordine[];
  constructor(private prod: OrdineService, private log: LogService) {  }

  ngOnInit(): void {
    this.ottieniptest();
  }

  ottieniptest() {
    this.prod.getAllOrdine(0).subscribe(
      (resp) => {
        this.log.Debug(GestioneOrdiniRicevutiComponent.name, "debugtest", [resp]);
        this.ordtest = resp as Ordine[];
      }, 
        
      (error) => {
        this.log.Error(GestioneOrdiniRicevutiComponent.name, "errore", [error]);
      }
    )
  }

}
