import { Component, OnInit } from '@angular/core';
import { Sconto } from 'src/app/models/Sconto';
import { LogService } from 'src/app/services/log.service';
import { ScontoService } from 'src/app/services/sconto/sconto.service';

@Component({
  selector: 'app-gestione-sconti',
  templateUrl: './gestione-sconti.component.html',
  styleUrls: ['./gestione-sconti.component.css']
})
export class GestioneScontiComponent implements OnInit {
  filtroSelect: string='tutti';
  selectFromModel: string='catalogo';

  sconti:Sconto[];
  sconto:Sconto;
  idAzienda:number;

  constructor(private scontoService: ScontoService,private log: LogService) {
    
  }
  ngOnInit(): void {

    this.getAllSconti()

  }

  getAllSconti(){
    this.scontoService.getAllSconto().subscribe(
      (resp)=>{
        this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
        this.sconti = resp as Sconto[];
      },
      (error)=>{
        this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }
  
  aggiungiSconto(form){
    this.sconto={
      id:null,
      percentuale: form.percentuale,
      dataInizio: form.dataInizio,
      dataFine: form.dataFine,
      tipo: this.selectFromModel,
      quantita: form.quantita,
      idAzienda: 1
    };
    
      this.scontoService.insertSconto(this.sconto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
          //this.prodotto = resp as Prodotto;
        },
        (error)=>{
          this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
        }
      )
  }


  modificaSconto(form){
    this.sconto={
      id:null,
      percentuale: form.percentuale,
      dataInizio: form.dataInizio,
      dataFine: form.dataFine,
      tipo: this.selectFromModel,
      quantita: form.quantita,
      idAzienda: 1
    };
    
      this.scontoService.updateSconto(this.sconto).subscribe(
        (resp)=>{
          this.log.Debug(GestioneScontiComponent.name,"chiamata a back-end",[resp]);
          //this.prodotto = resp as Prodotto;
        },
        (error)=>{
          this.log.Error(GestioneScontiComponent.name,"chiamata a back-end",[error]);
        }
      )
  }

  cancellaSconto(){
    

  }
  
}
