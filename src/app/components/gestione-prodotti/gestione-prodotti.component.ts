import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestione-prodotti',
  templateUrl: './gestione-prodotti.component.html',
  styleUrls: ['./gestione-prodotti.component.css']
})
export class GestioneProdottiComponent implements OnInit {
  nome:String;
  constructor() { }

  ngOnInit(): void {
  }

  prendiDati(n){
    this.nome=n.nome;
  }

}
