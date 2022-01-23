import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Amministratore } from 'src/app/models/Amministratore';
import { Azienda } from 'src/app/models/Azienda';
import { Distributore } from 'src/app/models/Distributore';
import { Utente } from 'src/app/models/Utente';
import { AmministratoreService } from 'src/app/services/amministratore/amministratore.service';
import { AziendaService } from 'src/app/services/azienda/azienda.service';
import { DistributoreService } from 'src/app/services/distributore/distributore.service';
import { LogService } from 'src/app/services/log.service';
import { utility } from 'src/utility/utility';

@Component({
  selector: 'app-profilo-azienda',
  templateUrl: './profilo-azienda.component.html',
  styleUrls: ['./profilo-azienda.component.css']
})
export class ProfiloAziendaComponent implements OnInit {
  idAzienda: number;
  azienda: Azienda;

  amministratore: Amministratore;
  distributore: Distributore;

  constructor(private aziendaService: AziendaService,private amministratoreService: AmministratoreService, private distributoreService: DistributoreService,private route:ActivatedRoute, private router: Router,private log : LogService) { }

  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"))
  ngOnInit(): void {
      this.prendiIdDalRouter();
      this.getProfiloAziendaById();
    }

  prendiIdDalRouter() {
    if (this.route.paramMap != undefined && this.route.paramMap != null) {
      this.route.paramMap.subscribe(params =>{
        this.idAzienda = Number(params.get('id'));//5
        }
      )
    }
  }


  getProfiloAziendaById(){
    if(this.azienda == undefined)
    {
      this.aziendaService.findById(this.idAzienda).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          this.azienda=resp as Azienda;
          console.log(this.azienda)
        },
        (error)=>{
          this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
        }
      )
    }
  }


  newPassword(form){
    let password=form.password;
    if(this.currentUser.tipo=='Amministratore'){
      this.amministratore={
        id:this.currentUser.id,
        email:this.currentUser.email,
        password:utility.criptaPassword(form.password),
        username:this.currentUser.username
      }
      this.amministratoreService.updateAmministratore(this.amministratore).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          this.amministratore=resp as Amministratore;
          console.log(this.amministratore)
          document.getElementById("modificaPassword").click()
          window.alert("PASSWORD MODIFICATA")
        },
        (error)=>{
          this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
        }
      )
    }
    if(this.currentUser.tipo=='Azienda'){
      this.azienda={
        id:this.currentUser.id,
        descrizione:this.currentUser.descrizione,
        email:this.currentUser.email,
        indirizzo:this.currentUser.indirizzo,
        logo:this.currentUser.logo,
        nomeAzienda:this.currentUser.nome,
        password:utility.criptaPassword(form.password),
        ordini:null,
        prodotti:null,
        vat:this.currentUser.vat
      }
      this.aziendaService.updateAzienda(this.azienda).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          this.azienda=resp as Azienda;
          console.log(this.distributore)
          document.getElementById("modificaPassword").click()
          window.alert("PASSWORD MODIFICATA")
        },
        (error)=>{
          this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
        }
      )
    }
    if(this.currentUser.tipo=='Distributore'){
      this.distributore={
        id:this.currentUser.id,
        cognome:this.currentUser.cognome,
        nome:this.currentUser.nome,
        email:this.currentUser.email,
        password:utility.criptaPassword(form.password),
        idOrdineProva:null,
        indirizzoSede:this.currentUser.indirizzo,
        ordini:null,
        telefono:Number(this.currentUser.telefono),
        username:this.currentUser.username,
        vat:this.currentUser.vat
      }
      this.distributoreService.updateDistributore(this.distributore).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          this.distributore=resp as Distributore;
          console.log(this.distributore)
          document.getElementById("modificaPassword").click()
          window.alert("PASSWORD MODIFICATA")
        },
        (error)=>{
          this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
        }
      )
    }
  }




  eliminaAccount(id){
    console.log("Numero "+id)
    if(this.currentUser.tipo=='Azienda'){
      this.aziendaService.deleteAzienda(id).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          console.log(resp)
          document.getElementById("eliminaAccount").click()
          this.router.navigateByUrl('');
        },
        (error)=>{
          this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
        }
      )
    }
    if(this.currentUser.tipo=='Distributore'){
      this.distributoreService.deleteDistributore(id).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          console.log(resp)
          document.getElementById("eliminaAccount").click()
          this.router.navigateByUrl('');
        },
        (error)=>{
          this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
        }
      )
    }
  }


  modificaAccount(form){
    if(this.currentUser.tipo=='Amministratore'){
      this.amministratore={
        id:this.currentUser.id,
        email:this.currentUser.email,
        password:utility.criptaPassword(form.password),
        username:this.currentUser.username
      }
      this.amministratoreService.updateAmministratore(this.amministratore).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          this.amministratore=resp as Amministratore;
          console.log(this.amministratore)
          document.getElementById("modificaPassword").click()
          window.alert("PASSWORD MODIFICATA")
        },
        (error)=>{
          this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
        }
      )
    }
    if(this.currentUser.tipo=='Azienda'){
      this.azienda={
        id:this.currentUser.id,
        descrizione:this.currentUser.descrizione,
        email:this.currentUser.email,
        indirizzo:this.currentUser.indirizzo,
        logo:this.currentUser.logo,
        nomeAzienda:this.currentUser.nome,
        password:utility.criptaPassword(form.password),
        ordini:null,
        prodotti:null,
        vat:this.currentUser.vat
      }
      this.aziendaService.updateAzienda(this.azienda).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          this.azienda=resp as Azienda;
          console.log(this.distributore)
          document.getElementById("modificaPassword").click()
          window.alert("PASSWORD MODIFICATA")
        },
        (error)=>{
          this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
        }
      )
    }
    if(this.currentUser.tipo=='Distributore'){
      this.distributore={
        id:this.currentUser.id,
        cognome:this.currentUser.cognome,
        nome:this.currentUser.nome,
        email:this.currentUser.email,
        password:utility.criptaPassword(form.password),
        idOrdineProva:null,
        indirizzoSede:this.currentUser.indirizzo,
        ordini:null,
        telefono:Number(this.currentUser.telefono),
        username:this.currentUser.username,
        vat:this.currentUser.vat
      }
      this.distributoreService.updateDistributore(this.distributore).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          this.distributore=resp as Distributore;
          console.log(this.distributore)
          document.getElementById("modificaPassword").click()
          window.alert("PASSWORD MODIFICATA")
        },
        (error)=>{
          this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
        }
      )
    }

  }
}
