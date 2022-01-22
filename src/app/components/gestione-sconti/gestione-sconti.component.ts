import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/Prodotto';
import { Sconto } from 'src/app/models/Sconto';
import { ScontoProdotto } from 'src/app/models/ScontoProdotto';
import { Utente } from 'src/app/models/Utente';
import { LogService } from 'src/app/services/log.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';
import { ScontoProdottoService } from 'src/app/services/sconto-prodotto/sconto-prodotto.service';
import { ScontoService } from 'src/app/services/sconto/sconto.service';

@Component({
  selector: 'app-gestione-sconti',
  templateUrl: './gestione-sconti.component.html',
  styleUrls: ['./gestione-sconti.component.css']
})
export class GestioneScontiComponent implements OnInit {
  filtroSelect: string='tutti';
  selectFromModel: string='catalogo';
  filtroNome:string;
  
  sconti:Sconto[];
  sconto:Sconto;
  prodotto: Prodotto;
  prodotti: Prodotto[];
  idAzienda:number;
  idScontoDaModificare:number;
  idScontoDaEliminare:number;

  constructor(private scontoService: ScontoService,private scontoProdottoService: ScontoProdottoService
    ,private prodottoService: ProdottoService, private log: LogService) {
    
  }
  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"))
  ngOnInit(): void {

    this.getAllScontiByAzienda()
  }

  getAllSconti(){
    this.scontoService.getAllSconto().subscribe(
      (resp)=>{
        this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
        this.sconti = resp as Sconto[];
      },
      (error)=>{
        this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
      }
    )
    //this id.sconto find all prodotti scontati by id azienda 
    this.prodottoService.findProdottiBySconto(4).subscribe(
      (resp)=>{
        this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
        this.prodotti = resp as Prodotto[];
        console.log(resp)
      },
      (error)=>{
        this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }


  getAllScontiByAzienda(){
    //non prende id.azienda find all prodotti scontati by id azienda
    this.scontoService.findScontiByAzienda(this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
        this.sconti = resp as Sconto[];
        console.log(resp)
      },
      (error)=>{
        this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
      }
    )
    //this id.azienda non trova id se lo prende dall'utente la sessione
    // this.prodottoService.findProdottiBySconto(4).subscribe(
    //   (resp)=>{
    //     this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
    //     this.prodotti = resp as Prodotto[];
    //     console.log(resp)
    //   },
    //   (error)=>{
    //     this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
    //   }
    // )
  }
  getAllScontiByTipo(){
    console.log(this.filtroSelect)
    if(this.filtroSelect=='tutti'){
      this.getAllScontiByAzienda()
    }
    else{
    this.scontoService.getAllScontoByTipoAndIdAzienda(this.filtroSelect,this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
        this.sconti = resp as Sconto[];
        console.log(resp)
      },
      (error)=>{
        this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
      }
    )}
  }
  
  aggiungiSconto(form){
    var newSconto = {
      nomeSconto:form.nome,
      percentuale: form.percentuale,
      dataInizio: form.dataInizio,
      dataFine: form.dataFine,
      tipo: this.selectFromModel,
      idAzienda: 3
    }

      this.scontoService.insertSconto(newSconto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
          let model=document.getElementById("aggiungiSconto").click();
          this.sconto = resp as Sconto;
          this.getAllScontiByAzienda()
        },
        (error)=>{
          this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
        }
      )
  }


  modificaSconto(form){
    console.log("id sconto "+this.idScontoDaModificare)
    this.sconto={
      id:this.idScontoDaModificare,
      nomeSconto:form.nome,
      percentuale: form.percentuale,
      dataInizio: form.dataInizio,
      dataFine: form.dataFine,
      tipo: this.selectFromModel,
      quantita: form.quantita,
      idAzienda: 3,
    };
    
      this.scontoService.updateSconto(this.sconto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
          let model=document.getElementById("modificaSconto").click();
          this.sconto = resp as Sconto;
          this.getAllScontiByAzienda()
        },
        (error)=>{
          this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
        }
      )
  }

  cancellaSconto(id){
    console.log(this.idScontoDaEliminare)
    this.scontoService.deleteSconto(id).subscribe(
      (resp)=>{
        this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
        // this.prodotto = resp as Prodotto;
        // this.prodotti.splice(id,1)
        // window.alert("SCONTO ELIMINATO")
        let x=document.getElementById("trash").click()
        this.getAllScontiByAzienda();
      },
      (error)=>{
        this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
      }
    )

  }
   findByNomeSconto(){//prendere id azienda dalla login
    if(this.filtroNome==''){
      this.getAllScontiByAzienda()
    }
    else{
       this.scontoService.findScontiByNomeInAzienda(this.filtroNome,this.currentUser.id).subscribe(
         (resp)=>{
           this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
           this.sconti = resp as Sconto[];
         },
         (error)=>{
           this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
         }
       )
     }
   }
  
}
