import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotto } from 'src/app/models/Prodotto';
import { Sconto } from 'src/app/models/Sconto';
import { ScontoProdotto } from 'src/app/models/ScontoProdotto';
import { Utente } from 'src/app/models/Utente';
import { LogService } from 'src/app/services/log.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';
import { ScontoProdottoService } from 'src/app/services/sconto-prodotto/sconto-prodotto.service';
import { ScontoService } from 'src/app/services/sconto/sconto.service';
import { testRegex } from '../TestRegex/regex';

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
  idScontoInserito:number;

  rX: testRegex = new testRegex();
  dataInizio: string;
  dataFine: string;

  constructor(private scontoService: ScontoService,private scontoProdottoService: ScontoProdottoService
    ,private prodottoService: ProdottoService, private log: LogService, private route: Router) {
    
  }
  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"))
  ngOnInit(): void {
    if(this.currentUser != null) {
      this.getAllScontiByAzienda();
    }
    
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
    if(this.currentUser.id!=undefined){
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
  }
  getAllScontiByTipo(){
    console.log(this.filtroSelect)
    if(this.filtroSelect=='tutti'){
      this.getAllScontiByAzienda();
    }
    else{
      if(this.currentUser.id!=undefined){
    this.scontoService.getAllScontoByTipoAndIdAzienda(this.filtroSelect,this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
        this.sconti = resp as Sconto[];
        console.log(resp)
      },
      (error)=>{
        this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
      }
      )
      }
    }
  }
  
  aggiungiSconto(form){

    /*form.dataInizio = this.dataInizio.toLocaleDateString("it-IT");
    form.dataFine = this.dataInizio.toLocaleDateString("it-IT");
    
    form.dataInizio = this.dataInizio.toLocaleDateString("en-US");
    form.dataFine = this.dataFine.toLocaleDateString("en-US"); */

    var inputDataInizio = new Date(form.dataInizio);
    this.dataInizio = inputDataInizio.toISOString().slice(0, 10);
    form.dataInizio = this.dataInizio;

    if(this.rX.regexData(form.dataInizio)!= true) {
      return alert("Data non valida, si prega di riprovare");
    }

    var inputDataFine = new Date(form.dataFine);
    this.dataInizio = inputDataFine.toISOString().slice(0, 10);
    form.dataFine = this.dataFine;

    if(this.rX.regexData(form.dataFine)!= true) {
      return alert("Data non valida, si prega di riprovare");
    }

    if(this.rX.regexNome(form.nome)!= true) {
      return alert("Nome non valido, si prega di riprovare");
    }

    if(this.rX.regexPercentuale(form.percentuale)!= true) {
      return alert("Percentuale non valida, si prega di riprovare");
    }

    var newSconto = {
      nomeSconto:form.nome,
      percentuale: form.percentuale,
      dataInizio: form.dataInizio,
      dataFine: form.dataFine,
      tipo: this.selectFromModel,
      idAzienda: this.currentUser.id
    }

      this.scontoService.insertSconto(newSconto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
          let model=document.getElementById("aggiungiSconto").click();
          this.idScontoInserito = resp ;
          console.log(this.idScontoInserito)
          this.route.navigate(['/selezionaProdottiScontare',JSON.stringify(this.idScontoInserito)])
          //this.getAllScontiByAzienda()
        },
        (error)=>{
          this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
          window.alert("Campi vuoti o errati, riprova")
        }
      )
  }


  modificaSconto(form){
    console.log("id sconto "+this.idScontoDaModificare)

    if(this.rX.regexData(form.dataInizio)!= true) {
      return alert("Data non valida, si prega di riprovare");
    }

    if(this.rX.regexData(form.dataFine)!= true) {
      return alert("Data non valida, si prega di riprovare");
    }

    if(this.rX.regexNome(form.nome)!= true) {
      return alert("Nome non valido, si prega di riprovare");
    }

    if(this.rX.regexPercentuale(form.percentuale)!= true) {
      return alert("Percentuale non valida, si prega di riprovare");
    }

    if(this.rX.regexQuantita(form.quantita)!= true) {
      return alert("Quantità non valida, si prega di riprovare");
    }

    this.sconto={
      id:this.idScontoDaModificare,
      nomeSconto:form.nome,
      percentuale: form.percentuale,
      dataInizio: form.dataInizio,
      dataFine: form.dataFine,
      tipo: this.selectFromModel,
      quantita: form.quantita,
      idAzienda: this.currentUser.id,
    };
    
      this.scontoService.updateSconto(this.sconto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
          let model=document.getElementById("modificaSconto").click();
          this.getAllScontiByAzienda()
        },
        (error)=>{
          this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
          window.alert("Campi vuoti o errati, riprova")
        }
      )
  }

  cancellaSconto(id){
    this.scontoService.deleteSconto(id).subscribe(
      (resp)=>{
        this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
        window.alert("SCONTO ELIMINATO")
        let x=document.getElementById("trash").click()
        this.getAllScontiByAzienda();
      },
      (error)=>{
        this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
      }
    )
    this.scontoProdottoService.deleteScontoProdotto(id).subscribe(
      (resp)=>{
        this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
        console.log(" CANCELLO sconto prodotto"+resp)
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
      if(this.currentUser!=undefined){
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
  
}
