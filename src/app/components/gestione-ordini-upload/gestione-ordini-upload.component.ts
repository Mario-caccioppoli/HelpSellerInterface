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

  
  uploadDocumento(files: File[]): void{
    const formData=new FormData();
    for(const file of files){
      this.nomeDocumento = file.name;
      formData.append('files', file, file.name);
    }

    this.fileService.upload(formData).subscribe(
      event =>{
        console.log(event);
        this.reportProgress(event);
        this.insertDocumento();
      },
      (error: HttpErrorResponse)=>{ 

        console.log(error);
      }
    )
  }

  insertDocumento() {
    
    this.documento = {
      id: null,
      autore: this.currentUser.email,
      data: new Date(),
      idOrdine: this.idOrd ,
      titolo:this.nomeDocumento
    }
    this.docs.insertDocumento(this.documento).subscribe(
      (resp)=>{
        this.log.Debug(GestioneOrdiniUploadComponent.name, "ok", [resp]);
        window.alert("documento caricato");
      },
      (error)=>{
        this.log.Error(GestioneOrdiniUploadComponent.name, "errore", [error]);

      }
    )
  }
  private reportProgress(httpEvent: HttpEvent<String[] | Blob>):void {
    switch(httpEvent.type){
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded,httpEvent.total,'Uploading');
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded,httpEvent.total,'Uploading');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header return '+httpEvent);
        break;
      case HttpEventType.Response:
        if(httpEvent.body instanceof Array){
          for(const fileName of httpEvent.body){
            //filenames is any variable to download file
            this.filenames.unshift(fileName)
          }
        }else{
          //download logic
        }
        break;
    }
  }
  updateStatus(loaded: number, total: number, requestType: string) {
    throw new Error('Method not implemented.');
  }

}
