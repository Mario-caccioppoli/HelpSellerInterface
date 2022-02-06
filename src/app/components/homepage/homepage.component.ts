import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/Prodotto';
import { Utente } from 'src/app/models/Utente';
import { LogService } from 'src/app/services/log.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  currentUser: Utente = JSON.parse(localStorage.getItem("currentUser"));

  constructor(private ps: ProdottoService, private log: LogService) { }

  ngOnInit(): void {
    this.getSuggested();
  }

  cercaNomeProdotto:string;  
  prodotti : Prodotto[]; //getall prodotti

  myStorage = window.localStorage;

  cercaChange(){
    if(this.cercaNomeProdotto==''){
      this.getSuggested();
    }
    else{
    this.ps.findAllProdottiByNome(this.cercaNomeProdotto).subscribe(
      (resp)=>{
        this.log.Debug(HomepageComponent.name,"chiamata a back-end",[resp]);
        this.prodotti=resp;
        console.log(this.prodotti.forEach(p=>p.nomeProdotto))
        this.prodotti.forEach(p=>{
          if(p.immagineBlob!=(undefined && null)){
            p.immagineBlob='data:image/jpeg;base64,'+p.immagineBlob;
          }
        })
      },
      (error)=>{
        this.log.Error(HomepageComponent.name,"chiamata a back-end",[error]);
      }
    )
    }
  }

  getSuggested(){
    this.ps.firstLayer().subscribe(
      (resp)=>{
        this.log.Debug(HomepageComponent.name,"chiamata a back-end",[resp]);
        this.prodotti = resp as Prodotto[];
        this.prodotti.forEach(p=>{
          if(p.immagineBlob!=(undefined && null)){
            p.immagineBlob='data:image/jpeg;base64,'+p.immagineBlob;
          }
        })
      },
      (error)=>{
        this.log.Error(HomepageComponent.name,"chiamata a back-end",[error]);
      }
    )
  }  



}
