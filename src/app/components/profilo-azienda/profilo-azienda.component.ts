import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Azienda } from 'src/app/models/Azienda';
import { AziendaService } from 'src/app/services/azienda/azienda.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-profilo-azienda',
  templateUrl: './profilo-azienda.component.html',
  styleUrls: ['./profilo-azienda.component.css']
})
export class ProfiloAziendaComponent implements OnInit {
  idAzienda: number;
  azienda: Azienda;

  constructor(private aziendaService: AziendaService,private route:ActivatedRoute,private log : LogService) { }

  ngOnInit(): void {
      this.prendiIdDalRouter();
      this.getProfiloAziendaById();
    }
  
  prendiIdDalRouter(){
    this.route.paramMap.subscribe( params =>
      this.idAzienda = +params.get('id')
      )

  }


  getProfiloAziendaById(){
    this.aziendaService.findById(this.idAzienda).subscribe(
      (resp)=>{
        this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
        this.azienda=resp as Azienda;
      },
      (error)=>{
        this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
      }
    )
  }

}
