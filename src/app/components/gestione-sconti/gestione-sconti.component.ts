import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestione-sconti',
  templateUrl: './gestione-sconti.component.html',
  styleUrls: ['./gestione-sconti.component.css']
})
export class GestioneScontiComponent implements OnInit {
  filtroSelect: string='tutti';
  selectFromModel: string='catalogo';

  constructor() {
    
  }
  ngOnInit(): void {
    
  }
  
  aggiungiSconto(form){

  }

  cancellaSconto(){

  }

  modificaSconto(form){

  }
  
}
