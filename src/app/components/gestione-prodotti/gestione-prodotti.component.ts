import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { Prodotto } from 'src/app/models/Prodotto';
import { Utente } from 'src/app/models/Utente';
import { AziendaService } from 'src/app/services/azienda/azienda.service';
import { FileService } from 'src/app/services/file/file.service';
import { LogService } from 'src/app/services/log.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

@Component({
  selector: 'app-gestione-prodotti',
  templateUrl: './gestione-prodotti.component.html',
  styleUrls: ['./gestione-prodotti.component.css']
})
export class GestioneProdottiComponent implements OnInit {
  prodotti:Prodotto[];
  prodotto: Prodotto;
  azienda: Azienda;
  idAzienda: number;
  
  filtroCodice: string;
  filtroNome: string;

  idProdottoDaModificare:number;
  idProdottoEliminare: number;

  filenames:any[]=[];
  img:any;

  constructor(private prodottoService: ProdottoService , private log: LogService, private fileService: FileService ) { }

  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"))
  
  ngOnInit(): void {
    if(this.currentUser != null) {
      this.getProdottiByIdAzienda()  
    }
  }
  getProdottiByIdAzienda(){
    if(this.currentUser!=undefined){
    this.prodottoService.getProdottoByIdAzienda(this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
        this.prodotti = resp as Prodotto[];
      },
      (error)=>{
        this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
      }
    )
    // this.aziendaService.findAziendaByProdotto(this.prodotti.map(p=>p.id)).subscribe(
    //   (resp)=>{
    //     this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
    //     this.azienda = resp as Azienda;
    //   },
    //   (error)=>{
    //     this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
    //   }
    // )
    }
  }
  aggiungiProdotto(form){
    this.prodotto={
      nomeProdotto: form.nome,
      prezzo: form.prezzo,
      descrizione: form.descrizione,
      quantita: form.quantita,
      immagine: "immagine",
      quantitaMinima:100,
      peso: form.peso,
      volume: form.volume,
      idAzienda: this.currentUser.id,
      }; //prendere id azienda


      console.log(this.prodotto);

      this.prodottoService.insertProdotto(this.prodotto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);

          //this.prodotto = resp as Prodotto;
          //TODO: aggiungere alert su controllo

          window.alert("prodotto inserito con successo")

          let model=document.getElementById("aggiungiProdotto").click();
          this.getProdottiByIdAzienda()
        },
        (error)=>{
          this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
          window.alert("Campi vuoti o errati, riprova")
        }
      )
  }
  modificaProdotto(form){
    this.prodotto={
      id:this.idProdottoDaModificare,
      nomeProdotto: form.nome,
      prezzo: form.prezzo,
      descrizione: form.descrizione,
      quantita: form.quantita,
      immagine: "immagine",
      quantitaMinima:100,
      peso: form.peso,
      volume: form.volume,
      idAzienda: this.currentUser.id
      };//prendere id azienda

      this.prodottoService.updateProdotto(this.prodotto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);

          //this.prodotto = resp as Prodotto;
          //TODO: aggiungere allert su controllo

          window.alert("prodotto modificato con successo")

          let model=document.getElementById("modificaProdotto").click();
          this.getProdottiByIdAzienda()
        },
        (error)=>{
          this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
          window.alert("Campi vuoti o errati, riprova")
        }
      )
  }

  eliminaProdotto(id){
    console.log(id);
    this.prodottoService.deleteProdotto(id).subscribe(
      (resp)=>{
        this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
        // this.prodotto = resp as Prodotto;
        // this.prodotti.splice(id,1)
        // window.alert("PRODOTTO ELIMINATO")
        let x=document.getElementById("eliminaProdotto").click()
        this.getProdottiByIdAzienda();
      },
      (error)=>{
        this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }
  
  changeCodice(){
    console.log(this.filtroCodice)
    if(this.filtroCodice==''){
      this.getProdottiByIdAzienda()
    }
    else{
    //non arriva this.idAzienda lo prendiamo dall'user session
    if(this.currentUser.id!=undefined){
    this.prodottoService.findProdottiByIdInAzienda(Number(this.filtroCodice),this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
        this.prodotti = resp as Prodotto[];
      },
      (error)=>{
        this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
      }
      )
      }
    }
  }

  changeNome(){
    if(this.filtroNome==''){
      this.getProdottiByIdAzienda()
    }
    else{
    //non arriva this.idAzienda lo prendiamo dall'user session
    if(this.currentUser.id!=undefined){
    this.prodottoService.findProdottiByNomeInAzienda(this.filtroNome,this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
        this.prodotti = resp as Prodotto[];
      },
      (error)=>{
        this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
      }
      )
    }
    }
  }


  uploadFotoProdotto(files: File[]): void{
    const formData=new FormData();
    for(const file of files){
      formData.append('files', file, file.name);
    }
    this.fileService.upload(formData).subscribe(
      event =>{
        console.log(event);
        this.reportProgress(event);
      },
      (error: HttpErrorResponse)=>{ 
        console.log(error);
      }
    )
  }


  downloadFile(fileName: string): void{
    this.fileService.download(fileName).subscribe(
      event =>{
        console.log(event);
        this.reportProgress(event);
      },
      (error: HttpErrorResponse)=>{ 
        console.log(error);
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
