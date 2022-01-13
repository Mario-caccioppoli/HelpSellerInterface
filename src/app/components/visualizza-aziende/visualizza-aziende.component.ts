import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { AziendaService } from 'src/app/services/azienda/azienda.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-visualizza-aziende',
  templateUrl: './visualizza-aziende.component.html',
  styleUrls: ['./visualizza-aziende.component.css']
})
export class VisualizzaAziendeComponent implements OnInit {
  aziende: Azienda[]
  constructor(private aziendaService: AziendaService, private log: LogService) { }

  ngOnInit(): void {
    this.getAllAziende()
  }

  getAllAziende(){
    this.aziendaService.getAllAzienda().subscribe(
      (resp) => {
        this.log.Debug(VisualizzaAziendeComponent.name,"chiamata a back-end",[resp]);
        this.aziende = resp as Azienda[];
      },
      (error) => {
        this.log.Error(VisualizzaAziendeComponent.name,"chiamata a back-end",[error]);
      }
    )

  }

}
