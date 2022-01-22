import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { Prodotto } from 'src/app/models/Prodotto';
import { Utente } from 'src/app/models/Utente';
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
  
  filtroCodice: string;
  filtroNome: string;

  idProdottoDaModificare:number;
  idProdottoEliminare: number;

  constructor(private prodottoService: ProdottoService,private aziendaService: AziendaService ,private log: LogService ) { }

  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"))
  
  ngOnInit(): void {

    this.getProdottiByIdAzienda()

  }
  getProdottiByIdAzienda(){
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
  aggiungiProdotto(form){
    this.prodotto={
      nomeProdotto: form.nome,
      prezzo: form.prezzo,
      descrizione: form.descrizione,
      quantita: form.quantita,
      immagine: "immagine",
      quantitaMinima:99,
      peso: form.peso,
      volume: form.volume,
      idAzienda: 1,
      }; //prendere id azienda


      console.log(this.prodotto);

      this.prodottoService.insertProdotto(this.prodotto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
          this.prodotto = resp as Prodotto;
          let model=document.getElementById("aggiungiProdotto").click();
          this.getProdottiByIdAzienda()
        },
        (error)=>{
          this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
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
      quantitaMinima:null,
      peso: form.peso,
      volume: form.volume,
      idAzienda: 1
      };//prendere id azienda

      this.prodottoService.updateProdotto(this.prodotto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
          this.prodotto = resp as Prodotto;
          let model=document.getElementById("modificaProdotto").click();
          this.getProdottiByIdAzienda()
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
    console.log(this.filtroCodice)
    if(this.filtroCodice==''){
      this.getProdottiByIdAzienda()
    }
    else{
    //non arriva this.idAzienda lo prendiamo dall'user session
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

  changeNome(){
    if(this.filtroNome==''){
      this.getProdottiByIdAzienda()
    }
    else{
    //non arriva this.idAzienda lo prendiamo dall'user session
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
