import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from 'src/app/models/Prodotto';
import { LogService } from 'src/app/services/log.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

@Component({
  selector: 'app-visualizza-prodotti',
  templateUrl: './visualizza-prodotti.component.html',
  styleUrls: ['./visualizza-prodotti.component.css']
})
export class VisualizzaProdottiComponent implements OnInit {
  idAzienda: number;
  prodotti : Prodotto[];
  constructor(private prodottoService : ProdottoService,private route: ActivatedRoute,private log : LogService) { }

  ngOnInit(): void {
    this.prendiIdAziendaDalRouter()
    if(this.idAzienda==null){
      this.getAllProdotti
    }
    else{
      this.getProdottiByIdAzienda()
    }
  }


  prendiIdAziendaDalRouter(){
    this.route.paramMap.subscribe(params=>
      this.idAzienda= +params.get('id'))
  }

  getAllProdotti(){
    this.prodottoService.getAllProdotto().subscribe(
      (resp)=>{
        this.log.Debug(VisualizzaProdottiComponent.name,"chiamata a back-end",[resp]);
        this.prodotti = resp as Prodotto[];
      },
      (error)=>{
        this.log.Error(VisualizzaProdottiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

  getProdottiByIdAzienda(){
    this.prodottoService.getProdottoByIdAzienda(this.idAzienda).subscribe(
      (resp) => {
        this.log.Debug(VisualizzaProdottiComponent.name,"chiamata a back-end",[resp]);
        this.prodotti = resp as Prodotto[];
      },
      (error) => {
        this.log.Error(VisualizzaProdottiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

}
