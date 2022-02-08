import { Component, Input, OnInit } from '@angular/core';
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

  @Input() idOrdine;

  constructor(private docs: DocumentoService, private log: LogService) { }

  ngOnInit(): void {
    this.documentoDownloadFunction();
  }

  documentoDownloadFunction() {
      this.docs.getDocumentiByIdOrder(this.idOrdine).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDownloadComponent.name, "ok", [success]);

          this.documentoArray = success as Documento[];
          console.log(this.documentoArray);
        },

        (error) => {
          this.log.Error(GestioneOrdiniDownloadComponent.name, "errore", [error]);
        }
      )
  }


}
