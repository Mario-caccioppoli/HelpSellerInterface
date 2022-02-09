import { Component, Input, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/Documento';
import { DocumentoService } from 'src/app/services/documento/documento.service';
import { LogService } from 'src/app/services/log.service';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { saveAs } from 'file-saver';
import { FileService } from 'src/app/services/file/file.service';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-gestione-ordini-download',
  templateUrl: './gestione-ordini-download.component.html',
  styleUrls: ['./gestione-ordini-download.component.css']
})
export class GestioneOrdiniDownloadComponent implements OnInit {

  documentoArray: Documento[];
  ordineProdotto: OrdineProdotto;
  nomeDocumento:string;

  @Input() idOrdine;
  fileStatus: any;

  constructor(private docs: DocumentoService, private log: LogService,private fileService:FileService) { }

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
  onDownloadFile(filename: string): void {
    this.fileService.download(filename).subscribe(
      event => {
        console.log(event);
        this.resportProgress(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  private resportProgress(httpEvent: HttpEvent<string | Blob>): void {
    switch(httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
          saveAs(new File([httpEvent.body], httpEvent.headers.get('File-Name')!, 
                  {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
          // saveAs(new Blob([httpEvent.body!], 
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        
        this.fileStatus.status = 'done';
        break;
        default:
          console.log(httpEvent);
          break;
      
    }
  }

  private updateStatus(loaded: number, total: number, requestType: string): void {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }

}
