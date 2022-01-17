import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/Documento';
import { DocumentoService } from 'src/app/services/documento/documento.service';
import { LogService } from 'src/app/services/log.service';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';

@Component({
  selector: 'app-gestione-ordini-download',
  templateUrl: './gestione-ordini-download.component.html',
  styleUrls: ['./gestione-ordini-download.component.css']
})
export class GestioneOrdiniDownloadComponent implements OnInit {

  documentoArray: Documento[];
  ordineProdotto: OrdineProdotto;

  constructor(private docs: DocumentoService, private log: LogService) { }

  ngOnInit(): void {
  }

  documentoDownloadFunction() {
    if(this.documentoArray != undefined)
    {
      this.docs.getDocumentiByIdOrder(this.ordineProdotto.idOrdine).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDownloadComponent.name, "ok", [success]);

          this.documentoArray = success as Documento[];
        },

        (error) => {
          this.log.Error(GestioneOrdiniDownloadComponent.name, "errore", [error]);
        }
      )
    }
  }

}
