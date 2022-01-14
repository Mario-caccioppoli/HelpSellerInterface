import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/Prodotto';
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
  idAzienda: number;

  constructor(private prodottoService: ProdottoService,private log: LogService ) { }

  ngOnInit(): void {

    this.getAllProdotti()

  }
  getAllProdotti(){
    this.prodottoService.getAllProdotto().subscribe(
      (resp)=>{
        this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
        this.prodotti = resp as Prodotto[];
      },
      (error)=>{
        this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }
  aggiungiProdotto(form){
    this.prodotto={
      id:15,
      nomeProdotto: form.nome,
      prezzo: form.prezzo,
      descrizione: form.descrizione,
      quantita: form.quantita,
      immagine: "capocchia",
      quantitaMinima:50,
      peso: form.peso,
      volume: form.volume,
      idAzienda: 100};

      console.log(this.prodotto);
      
      this.prodottoService.insertProdotto(this.prodotto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
          //this.prodotto = resp as Prodotto;
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
      immagine: "capocchia",
      quantitaMinima:null,
      peso: form.peso,
      volume: form.volume,
      idAzienda: 1};

      console.log(this.prodotto);

      this.prodottoService.insertProdotto(this.prodotto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
          //this.prodotto = resp as Prodotto;
        },
        (error)=>{
          this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
        }
      )
  }

  eliminaProdotto(){
    this.prodottoService.deleteProdotto(this.idAzienda).subscribe(
      (resp)=>{
        this.log.Debug(GestioneProdottiComponent.name,"chiamata a back-end",[resp]);
        //this.prodotto = resp as Prodotto;
      },
      (error)=>{
        this.log.Error(GestioneProdottiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }


}
