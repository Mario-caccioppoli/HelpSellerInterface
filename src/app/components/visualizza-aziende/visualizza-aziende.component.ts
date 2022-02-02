import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { Utente } from 'src/app/models/Utente';
import { AziendaService } from 'src/app/services/azienda/azienda.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-visualizza-aziende',
  templateUrl: './visualizza-aziende.component.html',
  styleUrls: ['./visualizza-aziende.component.css']
})
export class VisualizzaAziendeComponent implements OnInit {
  aziende: Azienda[];
  prove: Azienda[];
  ricercaAziendaByNome: string;
  constructor(private aziendaService: AziendaService, private log: LogService) { }

  
  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"))
  ngOnInit(): void {
    this.getAllAziende()
  }

  getAllAziende(){
    this.aziendaService.getAllAzienda().subscribe(
      (resp) => {
        this.log.Debug(VisualizzaAziendeComponent.name,"chiamata a back-end",[resp]);
        this.aziende = resp as Azienda[];
        this.aziende.forEach(p=>{
          if(p.logoBlob!=(undefined && null)){
            p.logoBlob='data:image/jpeg;base64,'+p.logoBlob;
          }
        })
      },
      (error) => {
        this.log.Error(VisualizzaAziendeComponent.name,"chiamata a back-end",[error]);
      }
    )

  }
  ricercaConSidebar(form){
    if(form.searchbar==''){
      this.getAllAziende()
    }
    else{
    this.aziendaService.findAziendeByName(form.searchbar).subscribe(
      (resp)=>{
        this.log.Debug(VisualizzaAziendeComponent.name,"chiamata a back-end",resp);
        this.aziende = resp as Azienda[];
        console.log(resp)
      },
      (error)=>{
        this.log.Error(VisualizzaAziendeComponent.name,"chiamata a back-end",[error]);
      }
    )
    }
  }


}
