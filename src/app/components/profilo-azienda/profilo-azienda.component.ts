import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Azienda } from 'src/app/models/Azienda';
import { Utente } from 'src/app/models/Utente';
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

  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"))
  ngOnInit(): void {
      this.prendiIdDalRouter();
      this.getProfiloAziendaById();
      console.log("dddd "+this.currentUser.nome)
    }

  prendiIdDalRouter() {
    //if (this.route.paramMap != undefined && this.route.paramMap != null) {
      this.route.paramMap.subscribe(params =>{
        this.idAzienda = Number(params.get('id'));//5
        }
      )
    //}
  }


  getProfiloAziendaById(){
    if(this.azienda != undefined)
    {
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
}
