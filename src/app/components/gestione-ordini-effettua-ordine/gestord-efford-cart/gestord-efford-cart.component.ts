import { Component, OnInit } from '@angular/core';
import { GestioneOrdiniCampioneComponent } from '../../gestione-ordini-campione/gestione-ordini-campione.component';
import { GestioneOrdiniEffettuaOrdineComponent } from '../gestione-ordini-effettua-ordine.component';
import { Prodotto } from 'src/app/models/Prodotto';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

@Component({
  selector: 'app-gestord-efford-cart',
  templateUrl: './gestord-efford-cart.component.html',
  styleUrls: ['./gestord-efford-cart.component.css']
})
export class GestordEffordCartComponent implements OnInit {

  ngOnInit() {

    this.getCarrello();
  }

  prodotto: Prodotto;

  uscita() {  //annulla la procedura di acquisto
    location.reload();
  }
  
  modcart() { //modifica il carrello
    let precart = document.getElementById('step1');
    let cart = document.getElementById('step2');
    precart.style.removeProperty("display");
    cart.style.removeProperty("display");
  }


  deleteItem(prodotto){

    let domItem = document.getElementById(`cart-item-`+ prodotto.id);
    sessionStorage.removeItem('domItem');

  }

  getCarrello() {
    let data = sessionStorage.getItem('cart');
    return data;
  }

}
