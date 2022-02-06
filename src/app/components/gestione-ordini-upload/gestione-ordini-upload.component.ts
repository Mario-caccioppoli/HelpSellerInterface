import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/Documento';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { DocumentoService } from 'src/app/services/documento/documento.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-gestione-ordini-upload',
  templateUrl: './gestione-ordini-upload.component.html',
  styleUrls: ['./gestione-ordini-upload.component.css']
})
export class GestioneOrdiniUploadComponent implements OnInit {

  documento: Documento;
  ordineProdotto: OrdineProdotto;

  constructor(private docs: DocumentoService, private log: LogService) { }

  ngOnInit(): void {
  }

  documentoUploadFunction(form) {
    if(this.documento != undefined)
    {
      this.docs.insertDocumento(form.upload).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniUploadComponent.name, "ok", [success]);

          //this.documento = success as Documento;
          //TODO: aggiungere alert su controllo
          alert("Documento inserito");
        },

        (error) => {
          this.log.Error(GestioneOrdiniUploadComponent.name, "errore", [error]);
        }
      )
    }
  }

}
