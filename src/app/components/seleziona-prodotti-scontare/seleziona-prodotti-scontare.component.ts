import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/Prodotto';

@Component({
  selector: 'app-seleziona-prodotti-scontare',
  templateUrl: './seleziona-prodotti-scontare.component.html',
  styleUrls: ['./seleziona-prodotti-scontare.component.css']
})
export class SelezionaProdottiScontareComponent implements OnInit {
  coloreBordo: boolean=false;
  checked: boolean=false;
  provaNumero: number[]=[];
  prodottiSelezionati: Prodotto[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  selezionaProdotti(item: any, event){
    var bordo=document.getElementById("prodottiContainer"+' '+item);
    const casellaCheck=document.getElementById("checkbox"+' '+item);
     if(event.target.checked){
       bordo.style.borderColor='orange';
       this.provaNumero.push(item);
       console.log(this.provaNumero)
     }
     else {
          for(let i=0;i<this.provaNumero.length;i++){
            if(this.provaNumero[i]===item){
              delete this.provaNumero[i];
              this.provaNumero=this.provaNumero.filter(n=>n) 
              console.log(this.provaNumero)
            }
          }
      }


  }
}
