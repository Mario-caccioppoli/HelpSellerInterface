import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/Prodotto';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

import { LogService } from 'src/app/services/log.service';
import { ActivatedRoute } from '@angular/router';
import { Ordine } from 'src/app/models/Ordine';
import { Utente } from 'src/app/models/Utente';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';
import { OrdineService } from 'src/app/services/ordine/ordine.service';
@Component({
  selector: 'app-gestione-ordini-effettua-ordine',
  templateUrl: './gestione-ordini-effettua-ordine.component.html',
  styleUrls: ['./gestione-ordini-effettua-ordine.component.css']
})
export class GestioneOrdiniEffettuaOrdineComponent implements OnInit {

  constructor(private prodottoService : ProdottoService, private route: ActivatedRoute, private log: LogService,private ordineProdottoService:OrdineProdottoService, private ordineService:OrdineService) { }
  //FORSE NON SERVONO
  idAzienda: number;
  product: Prodotto;
  ricercaProdottoByNome: any;

  //PER COSTRUIRE ORDINE
  ordine: Ordine;

  ordineProdottoList: OrdineProdotto[]=[];
  prodottiInOrdine: Prodotto[];
  number:number[]=[]
  
  //PER FUNZIONALITA
  cercaNomeProdotto:string;  
  currentUser:Utente=JSON.parse(localStorage.getItem('currentUser'));
  prodotti : Prodotto[]; //getall prodotti

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


// Inizio procedura Carrello

  avviaCarrello(selezione) {


    //var container=document.getElementById("prodottiContainer"+' '+selezione.id);
    var check=document.getElementById("checkbox"+' '+selezione.id);
    var qtaprod=document.getElementById("qtaprod"+' '+selezione.quantita);
    


    // let local_storage;
    // let itemsInCart = []
    
    // if(localStorage.getItem('carrello')  == (null || undefined)){
    //   local_storage =[];
    //   console.log("LocalStorage vuoto",JSON.parse(localStorage.getItem('carello')));
    //   itemsInCart.push(this.prodotti);

    //   localStorage.setItem('cart', JSON.stringify(itemsInCart));
    //   console.log('Inserito: ', itemsInCart);
    // }
    // else
    // {
    //   local_storage = JSON.parse(localStorage.getItem('carrello'));
    //   console.log("LocalStorage non vuoto",JSON.parse(localStorage.getItem('cart')));
    //   for(var i in local_storage)
    //   {
    //     console.log(local_storage[i].prodotti.prodotto.id);
    //     if(this.product.id == local_storage[i].prodotti.prodotto.id)
    //     {
    //       local_storage[i].quantity += 1;
    //       console.log("Quantita prodotto "+i+" : "+ local_storage[i].quantita);
    //       console.log('Gia inserito, id ', i); 
    //       this.product=null;
    //       break;  
    //    }
    //}
    
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


   // } 

    } */

  }

  cercaChange(){
    this.prodottoService.findAllProdottiByNome(this.cercaNomeProdotto).subscribe(
      (resp)=>{
        this.log.Debug(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",[resp]);
        this.prodotti=resp;
      },
      (error)=>{
        this.log.Error(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

  selezionaProdotti(event,prodotto:Prodotto){
    if(event!=undefined && prodotto.id!=undefined && this.ordineProdottoList!=undefined){
      let quantita=event.target.value;
      var ordineProdotto=this.ordineProdottoList.find(p=>p.prodotto.id==prodotto.id)
      if(ordineProdotto!=undefined){
        ordineProdotto.quantitaOrdine=quantita;
      }
      else{
        var ord:OrdineProdotto={
          idOrdine:null,
          prezzoUnitario:prodotto.prezzo,
          prodotto:prodotto,
          quantitaOrdine:quantita
        }
       this.ordineProdottoList.push(ord);
      }
    }
  }
    
    eseguiOrdine() {
      //to do add form comment
      var PrezzoTotale=0;
      var dataOggi=new Date();
      var dataConsegna=new Date();
      dataConsegna.setMonth(dataConsegna.getMonth()+2);
      this.ordineProdottoList.forEach(ordineProdotto => {
        PrezzoTotale+=ordineProdotto.prezzoUnitario*ordineProdotto.quantitaOrdine;
      });
      if(this.ordine==undefined){
        this.ordine={
          id:null,
          commento:"",
          dataConsegna:dataConsegna,
          dataOrdinazione:dataOggi,
          documento:null,
          idDistributore:this.currentUser.id,
          ordineProdotti:this.ordineProdottoList,
          prezzoTotale:PrezzoTotale,
          stato:"created",
        }
      }
      this.ordineService.insertOrdine(this.ordine).subscribe(
        (resp)=>{
          this.log.Debug(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",[resp]);
          window.alert("ORDINE EFFETTUATO")
        },
        (error)=>{
          this.log.Error(GestioneOrdiniEffettuaOrdineComponent.name,"chiamata a back-end",[error]);
        }
    ) 

  

    }

  
}
