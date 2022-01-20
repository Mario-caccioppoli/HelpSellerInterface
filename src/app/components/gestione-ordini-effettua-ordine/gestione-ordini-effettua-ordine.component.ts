import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/Prodotto';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

import { LogService } from 'src/app/services/log.service';
import { ActivatedRoute } from '@angular/router';
import { Ordine } from 'src/app/models/Ordine';
@Component({
  selector: 'app-gestione-ordini-effettua-ordine',
  templateUrl: './gestione-ordini-effettua-ordine.component.html',
  styleUrls: ['./gestione-ordini-effettua-ordine.component.css']
})
export class GestioneOrdiniEffettuaOrdineComponent implements OnInit {

  constructor(private prodottoService : ProdottoService, private route: ActivatedRoute, private log: LogService) { }

  idAzienda: number;
  prodotti : Prodotto[];
  ricercaProdottoByNome: any;
  ordine: Ordine;
  product: Prodotto;

  ngOnInit(): void {
    this.prendiIdAziendaDalRouter()
    if(this.idAzienda==null){
      this.getAllProdotti
    }
    else{
      this.getProdottiByIdAzienda()
    }
  }

  startCart() { //avvia il carrello e i checkbox sul click Effettua Ordine
    let element = document.getElementsByClassName("hide") as HTMLCollectionOf<HTMLElement>;
    for (var i=0; i < element.length; i++) {
      element[i].style.display = 'block';
    }
    
    let nascondi = document.getElementsByClassName("show") as HTMLCollectionOf<HTMLElement>;
    for (var k=0; k < nascondi.length; k++) {
      nascondi[k].style.display = 'none';
    }

    var max = <HTMLInputElement>document.getElementById("qtaprod");;
    max.setAttribute("max", '10000');

    var field = <HTMLInputElement>document.querySelector('input[value="qtval"]');
    field.value = '0' ;
  }

  exitCart() {  //annulla la procedura di acquisto
    
    let element = document.getElementsByClassName("hide") as HTMLCollectionOf<HTMLElement>;
    for (var i=0; i < element.length; i++) {
      element[i].style.removeProperty('display');
    }

    let btns = document.getElementsByClassName("show") as HTMLCollectionOf<HTMLElement>;
    for (var i=0; i < element.length; i++) {
      btns[i].style.removeProperty('display');
    }
  } 

  showCart() { //mostra il riepilogo pre-ordine
    let precart = document.getElementById('step1');
    let cart = document.getElementById('step2');
    precart.style.display = "none";
    cart.style.display = "block";
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////                         //////////////////////////////////////
////////////////////////////////////// Richiedi campioni prova //////////////////////////////////////
//////////////////////////////////////                         //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

  startSample() { 
    var element = document.getElementsByClassName("hide") as HTMLCollectionOf<HTMLElement>;
    for (var i=0; i < element.length; i++) {
      element[i].style.display = 'block';
    }
    
    let nascondi = document.getElementsByClassName("show") as HTMLCollectionOf<HTMLElement>;
    for (var k=0; k < nascondi.length; k++) {
      nascondi[k].style.display = 'none';
    }

    var maxsamp = <HTMLInputElement>document.getElementById("qtaprod");
    maxsamp.setAttribute("max", '1');

    var field = <HTMLInputElement>document.querySelector('input[value="qtval"]');
    field.value = '0' ;
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////                         //////////////////////////////////////
////////////////////////////////////// Chiamate al Backend     //////////////////////////////////////
//////////////////////////////////////                         //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

  prendiIdAziendaDalRouter(){
    this.route.paramMap.subscribe(params=>
      this.idAzienda= +params.get('id'))
  }

  getAllProdotti(){
    this.prodottoService.getAllProdotto().subscribe(
      (resp)=>{
        this.log.Debug(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",[resp]);
        this.prodotti = resp as Prodotto[];
      },
      (error)=>{
        this.log.Error(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

  getProdottiByIdAzienda(){
    this.prodottoService.getProdottoByIdAzienda(this.idAzienda).subscribe(
      (resp) => {
        this.log.Debug(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",[resp]);
        this.prodotti = resp as Prodotto[];
      },
      (error) => {
        this.log.Error(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

  ricercaConSidebar(form){
    if(form.searchbar==''){
      this.getProdottiByIdAzienda();
    }
    else{
    console.log(this.idAzienda)
    console.log(form.searchbar)
    this.prodottoService.findProdottiByNomeInAzienda(form.searchbar,this.idAzienda).subscribe(
      (resp)=>{
        this.log.Debug(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",resp);
        this.prodotti = resp as Prodotto[];
        console.log(resp)
      },
      (error)=>{
        this.log.Error(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",[error]);
      }
    )
    }
  }

  initializeCart(){

    this.prodottoService.getAllProdotto().subscribe(
      (resp)=>{
        this.log.Debug(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",[resp]);

        this.aggiungiAlCarrello(this.prodotti);

        this.prodotti = resp as Prodotto[];
      },
      (error)=>{
        this.log.Error(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

  aggiungiAlCarrello(prodotti: Prodotto[]) {
    let local_storage;
    let itemsInCart = []
    
    if(localStorage.getItem('cart')  == (null || undefined)){
      local_storage =[];
      console.log("LocalStorage vuoto",JSON.parse(localStorage.getItem('cart')));
      itemsInCart.push(prodotti);

      localStorage.setItem('cart', JSON.stringify(itemsInCart));
      console.log('Inserito: ', itemsInCart);
    }
    else
    {
      local_storage = JSON.parse(localStorage.getItem('cart'));
      console.log("LocalStorage non vuoto",JSON.parse(localStorage.getItem('cart')));
      for(var i in local_storage)
      {
        console.log(local_storage[i].prodotti.prodotto.id);
        if(this.product.id == local_storage[i].prodotti.prodotto.id)
        {
          local_storage[i].quantity += 1;
          console.log("Quantita prodotto "+i+" : "+ local_storage[i].quantita);
          console.log('Gia inserito, id ', i); 
          this.product=null;
          break;  
        }
    }
    if(this.product){
      itemsInCart.push(this.product);
    }
    local_storage.forEach(function (prodotto){
      itemsInCart.push(prodotto);
    })
    localStorage.setItem('cart', JSON.stringify(itemsInCart));

    }
  }

}
