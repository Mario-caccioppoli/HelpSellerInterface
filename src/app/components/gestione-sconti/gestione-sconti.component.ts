import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/Prodotto';
import { Sconto } from 'src/app/models/Sconto';
import { ScontoProdotto } from 'src/app/models/ScontoProdotto';
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

  constructor(private scontoService: ScontoService,private scontoProdottoService: ScontoProdottoService
    ,private prodottoService: ProdottoService, private log: LogService) {
    
  }
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
    this.scontoService.findScontiByAzienda(3).subscribe(
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
    this.scontoService.getAllScontoByTipo(this.filtroSelect).subscribe(
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
    this.sconto={
      id:null,
      nomeSconto:form.nome,
      percentuale: form.percentuale,
      dataInizio: form.dataInizio,
      dataFine: form.dataFine,
      tipo: this.selectFromModel,
      quantita: form.quantita,
      idAzienda: 1,
      prodotti: null
    };
    
      this.scontoService.insertSconto(this.sconto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
          //this.prodotto = resp as Prodotto;
        },
        (error)=>{
          this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
        }
      )
  }


  modificaSconto(form){
    this.sconto={
      id:null,
      nomeSconto:form.nome,
      percentuale: form.percentuale,
      dataInizio: form.dataInizio,
      dataFine: form.dataFine,
      tipo: this.selectFromModel,
      quantita: form.quantita,
      idAzienda: 1,
      prodotti: null
    };
    
      this.scontoService.updateSconto(this.sconto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
          //this.prodotto = resp as Prodotto;
        },
        (error)=>{
          this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
        }
      )
  }

  cancellaSconto(id){
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
   findProdottiScontati(){
       console.log(this.filtroNome)
       this.scontoProdottoService.findProdottiScontatiAzienda(this.filtroNome,this.idAzienda).subscribe(
         (resp)=>{
           this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
           //this.prodotti = resp as Prodotto[];
         },
         (error)=>{
           this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
         }
       )
   }
  
}
