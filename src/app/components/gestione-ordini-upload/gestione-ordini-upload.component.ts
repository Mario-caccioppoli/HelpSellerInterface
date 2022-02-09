import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/Documento';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { Utente } from 'src/app/models/Utente';
import { DocumentoService } from 'src/app/services/documento/documento.service';
import { FileService } from 'src/app/services/file/file.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-gestione-ordini-upload',
  templateUrl: './gestione-ordini-upload.component.html',
  styleUrls: ['./gestione-ordini-upload.component.css']
})
export class GestioneOrdiniUploadComponent implements OnInit {

  documento: Documento;
  nomeDocumento:string;
  ordineProdotto: OrdineProdotto;
  filenames: any;
  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"));

  @Input()
  idOrd:number;

  constructor(private docs: DocumentoService, private log: LogService,private fileService: FileService) { }

  ngOnInit(): void {
    
  }

  documentoUploadFunction(form) {
      this.docs.insertDocumento(this.documento).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniUploadComponent.name, "ok", [success]);

          this.documento = success as Documento;
          console.log(this.documento);
          alert("Documento inserito");
        },

        (error) => {
          this.log.Error(GestioneOrdiniUploadComponent.name, "errore", [error]);
          alert("Upload Documento fallito, si prega di riprovare");
        }
      )
  }
  updateStatus(loaded: number, total: number, requestType: string) {
    throw new Error('Method not implemented.');
  }

}
