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
  filter: number[]=[];
  prodottiSelezionati: Prodotto[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  selezionaProdotti(item: any, event){
    var bordo=document.getElementById("prodottiContainer"+' '+item);
    const casellaCheck=document.getElementById("checkbox"+' '+item);
     if(event.target.checked){
       bordo.style.borderColor='orange';
       console.log("inserisco "+item);
       this.provaNumero.push(item);
       console.log(this.provaNumero)
     }
     else {
            let x=this.provaNumero.find(x=> x==item);
            console.log("tolgo oggetto trovato "+x);
            bordo.style.borderColor='black';
            if(x!==-1)
            this.provaNumero.splice(this.provaNumero.indexOf(x),1);
            console.log(this.provaNumero)
          // for(let i=0;i<this.provaNumero.length;i++){
          //   if(this.provaNumero[i]===item){
              
          //   }
          // }
      }
  }
}
