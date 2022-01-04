import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleziona-prodotti-scontare',
  templateUrl: './seleziona-prodotti-scontare.component.html',
  styleUrls: ['./seleziona-prodotti-scontare.component.css']
})
export class SelezionaProdottiScontareComponent implements OnInit {
  coloreBordo: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  cambiaColore(){
    this.coloreBordo=!this.coloreBordo;
    var bordo=document.getElementById("prodottiContainer");
    if(this.coloreBordo){
      bordo.style.border="solid 2px";
      bordo.style.borderColor="orange";
    }
    else{
      bordo.style.border="solid 1px";
      bordo.style.borderColor="black";
    }
  }
}
