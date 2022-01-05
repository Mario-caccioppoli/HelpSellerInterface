import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';

@Component({
  selector: 'app-visualizza-aziende',
  templateUrl: './visualizza-aziende.component.html',
  styleUrls: ['./visualizza-aziende.component.css']
})
export class VisualizzaAziendeComponent implements OnInit {
  azienda: Azienda[]=[]
  constructor() { }

  ngOnInit(): void {
    this.azienda.push({idAzienda:1 ,email:"francesdfadsfa",password: "string",
    nomeAzienda: "string",
    VATNumber: "string",
    indirizzo: "string",
    descrizione: "string",
    logo: "string"})
  }

}
