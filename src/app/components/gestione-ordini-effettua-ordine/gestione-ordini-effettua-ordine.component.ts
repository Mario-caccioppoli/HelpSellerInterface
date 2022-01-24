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
  product: Prodotto[];
  myStorage = window.localStorage;
  ind: number;
  prodotto: Prodotto;



  ngOnInit(): void {
   /* this.prendiIdAziendaDalRouter()
    if(this.idAzienda==null){
      this.getAllProdotti
    }
    else{
      this.getProdottiByIdAzienda()
    }*/

    this.getAllProdotto();



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
    max.setAttribute("value", '0');
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
    maxsamp.setAttribute("value", '0');

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

  getAllProdotto(){
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

       // this.aggiungiAlCarrello(this.prodotti);

        this.prodotti = resp as Prodotto[];
      },
      (error)=>{
        this.log.Error(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

  



// Inizio procedura Carrello

  avviaCarrello(selezione) {

    var arraySelezionati = [];
    let indiceCheck: number = 0;
    this.product = this.prodotti;

    localStorage.removeItem('carrello');

    this.product.forEach(element => {
    
      this.product[indiceCheck] = {
      id: selezione.id,
      nomeProdotto: null,
      prezzo: null,
      descrizione: null,
      quantita: selezione.quantita,
      immagine: null,
      quantitaMinima: null,
      peso: null,
      volume: null,
      idAzienda: null,
      recensioni: null,
      sconti: null
    }
    
    indiceCheck +=1;

    var prodId : any = 'a';

    prodId = <HTMLInputElement>document.getElementById('check-' + indiceCheck);
    var isChecked = prodId.checked;    

    if (isChecked == true) {
      alert('ok')
      arraySelezionati.push(this.prodotti[indiceCheck-1]);
      console.log(this.prodotto[indiceCheck-1]);
    }
    
      
    });

    console.log(arraySelezionati);    

    localStorage.setItem('carrello', JSON.stringify(arraySelezionati));

  

    

    

     

      


  //    console.log('Selezionato: ', selezionato);
  //    console.log('Singolo: ', arraySelezionati[indice], indice);
  //    indice +=1;

  //    if (selezionato.id == true && selezionato.quantita > 0) {
   //     arrayProdotti.push(this.prodotti[indice]);
    //    indice +=1
     // }
      




      


    //console.log('selezionesingola: ', this.prodotti[indice]);
    //indice +=1;




/*
    let local_storage;
    let itemsInCart = [];

    localStorage.removeItem('carrello');
    
    if(localStorage.getItem('carrello')  == (null || undefined)){
      local_storage =[];
      console.log("Carrello vuoto",JSON.parse(localStorage.getItem('carrello')));
    
      var arrayAggiunta = [];
      console.log('selezionesingola: ', this.product[indice]);
      this.prodotti.forEach(element => {
      
        console.log('selezione: ', this.product[indice]);
      
      
      });
/*
        if (aggiunta.id == true && aggiunta.quantita > 0) {
          arrayAggiunta.push(aggiunta);
          indice = indice+1;
        }
      

      itemsInCart = arrayAggiunta;

      localStorage.setItem('carrello', JSON.stringify(itemsInCart));
      console.log('Inserito: ', itemsInCart); 
    }
    else
    {
      local_storage = JSON.parse(localStorage.getItem('carrello'));
      console.log("Carrello pieno",JSON.parse(localStorage.getItem('cart')));
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
    }*/
    
    /*if(this.product){
      itemsInCart.push(this.product);
    }
    local_storage.forEach(function (prodotto){
      itemsInCart.push(prodotto);
    })
    localStorage.setItem('cart', JSON.stringify(itemsInCart));

    } */
  }





  
}
