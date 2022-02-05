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
    if(this.currentUser.tipo == 'Distributore') {
      this.getSuggested(this.currentUser.id);
    }    
  }

  cercaNomeProdotto:string;  
  prodotti : Prodotto[]; //getall prodotti

  myStorage = window.localStorage;

  cercaChange(){
    this.ps.findAllProdottiByNome(this.cercaNomeProdotto).subscribe(
      (resp)=>{
        this.log.Debug(HomepageComponent.name,"chiamata a back-end",[resp]);
        this.prodotti=resp;
      },
      (error)=>{
        this.log.Error(HomepageComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

  getSuggested(id: number){
    this.ps.suggestProdotto(id).subscribe(
      (resp)=>{
        this.log.Debug(HomepageComponent.name,"chiamata a back-end",[resp]);
        this.prodotti = resp as Prodotto[];
      },
      (error)=>{
        this.log.Error(HomepageComponent.name,"chiamata a back-end",[error]);
      }
    )
  }  

}
