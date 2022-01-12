
import { Component, OnInit} from '@angular/core';
import { Divisione } from 'src/app/divisione';

@Component({
  selector: 'app-gestione-pratiche-trasporto',
  templateUrl: './gestione-pratiche-trasporto.component.html',
  styleUrls: ['./gestione-pratiche-trasporto.component.css']
})
export class GestionePraticheTrasportoComponent implements OnInit {

  tipoSpedizione : string = "";
  numeroDivisioni : number = 2;
  divisioni : Divisione[] = [];
  via : string;
  civico : string;
  citta : string;
  provincia : string;
  cap : string;
  quantita : number;
  constructor() { 
   }

  ngOnInit(): void { }

setValue(spedizione: string){
this.tipoSpedizione = spedizione;
}
aggiungiDivisione(){
  var id = this.divisioni.length -1;
  let div = new Divisione();
  div.setID(id);
div.setVia(this.via)
div.setCivico(this.civico)
div.setCitta(this.citta)
div.setProvincia(this.provincia)
div.setCAP(this.cap)
div.setQuantita(this.quantita)
  this.divisioni.push(div);
  

}
eliminaDivisione(indice : number){
  this.divisioni.splice(indice,1);
}
}
