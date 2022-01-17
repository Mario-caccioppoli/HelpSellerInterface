import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { Prodotto } from 'src/app/models/Prodotto';
import { AziendaService } from 'src/app/services/azienda/azienda.service';
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
  idProdottoEliminare: number;
  filtroCodice: string;
  filtroNome: string;

  constructor(private prodottoService: ProdottoService,private aziendaService: AziendaService ,private log: LogService ) { }

  ngOnInit(): void {

    this.getProdottiByIdAzienda()

  }
  getProdottiByIdAzienda(){
    this.prodottoService.getProdottoByIdAzienda(1).subscribe(
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
  aggiungiProdotto(form){
    this.prodotto={
      id:15,
      nomeProdotto: form.nome,
      prezzo: form.prezzo,
      descrizione: form.descrizione,
      quantita: form.quantita,
      immagine: "immagine",
      quantitaMinima:null,
      peso: form.peso,
      volume: form.volume,
      idAzienda: 1,
      recensioni:null}; //prendere id azienda

      console.log(this.prodotto);

      this.prodottoService.insertProdotto(this.prodotto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
          this.prodotto = resp as Prodotto;
          let model=document.getElementById("aggiungiProdotto").click();
        },
        (error)=>{
          this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
        }
      )
  }
  modificaProdotto(form){
    this.prodotto={
      id:null,
      nomeProdotto: form.nome,
      prezzo: form.prezzo,
      descrizione: form.descrizione,
      quantita: form.quantita,
      immagine: "immagine",
      quantitaMinima:null,
      peso: form.peso,
      volume: form.volume,
      idAzienda: 1,
      recensioni: null};//prendere id azienda
      console.log(this.prodotto);

      this.prodottoService.insertProdotto(this.prodotto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
          this.prodotto = resp as Prodotto;
          let model=document.getElementById("modificaProdotto").click();
        },
        (error)=>{
          this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
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
    if(this.filtroCodice==''){
      this.getProdottiByIdAzienda()
    }
    else{
    //non arriva this.idAzienda lo prendiamo dall'user session
    this.prodottoService.findProdottiByIdInAzienda(Number(this.filtroCodice),1).subscribe(
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

  changeNome(){
    if(this.filtroNome==''){
      //this.getProdottiByIdAzienda()
    }
    else{
    //non arriva this.idAzienda lo prendiamo dall'user session
    this.prodottoService.findProdottiByNomeInAzienda(this.filtroNome,1).subscribe(
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
