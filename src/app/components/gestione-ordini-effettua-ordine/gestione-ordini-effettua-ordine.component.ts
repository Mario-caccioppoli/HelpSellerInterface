import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestione-ordini-effettua-ordine',
  templateUrl: './gestione-ordini-effettua-ordine.component.html',
  styleUrls: ['./gestione-ordini-effettua-ordine.component.css']
})
export class GestioneOrdiniEffettuaOrdineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  startCart() { //avvia il carrello e i checkbox sul click Effettua Ordine
    let element = document.getElementsByClassName("hide") as HTMLCollectionOf<HTMLElement>;
    for (var i=0; i < element.length; i++) {
      element[i].style.display = 'block';
    }

    var max = <HTMLInputElement>document.querySelector('input[max="qtmax"]');
    max.setAttribute("max", '1');

    var field = <HTMLInputElement>document.querySelector('input[value="qtval"]');
    field.value = '0' ;
    
    let nascondi = document.getElementsByClassName("show") as HTMLCollectionOf<HTMLElement>;
    for (var k=0; k < nascondi.length; k++) {
      nascondi[k].style.display = 'none';
    }
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
  
  enableQty () {
    let element = document.getElementsByClassName("qty") as HTMLCollectionOf<HTMLElement>;
    for (var i=0; i < element.length; i++) {
      element[i].removeAttribute('disabled');
    }

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

    var max = <HTMLInputElement>document.querySelector('input[max="qtmax"]');
    max.setAttribute("max", '1');

    var field = <HTMLInputElement>document.querySelector('input[value="qtval"]');
    field.value = '0' ;
    
    let nascondi = document.getElementsByClassName("show") as HTMLCollectionOf<HTMLElement>;
    for (var k=0; k < nascondi.length; k++) {
      nascondi[k].style.display = 'none';
    }
  }



}
