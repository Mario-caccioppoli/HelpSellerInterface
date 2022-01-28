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
      console.log("dddd "+this.currentUser.nome)
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
        password:utility.criptaPassword(password),
        username:this.currentUser.username
      }
      this.amministratoreService.updateAmministratore(this.amministratore).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          this.currentUser.password=this.amministratore.password;
          localStorage.removeItem('currentUser');
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          document.getElementById("modificaPassword").click()
          window.alert("PASSWORD MODIFICATA")
          window.location.reload();

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
        password:utility.criptaPassword(password),
        ordini:null,
        prodotti:null,
        vat:this.currentUser.vat
      }
      this.aziendaService.updateAzienda(this.azienda).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          this.currentUser.password=this.azienda.password
          localStorage.removeItem('currentUser');
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          document.getElementById("modificaPassword").click()
          window.alert("PASSWORD MODIFICATA")
          window.location.reload();
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
        telefono:this.currentUser.telefono,
        username:this.currentUser.username,
        vat:this.currentUser.vat
      }
      this.distributoreService.updateDistributore(this.distributore).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          this.currentUser.password = this.distributore.password;
          localStorage.removeItem('currentUser');
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          document.getElementById("modificaPassword").click()
          window.alert("PASSWORD MODIFICATA")
          window.location.reload();
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
          window.localStorage.removeItem('currentUser');
          window.location.reload();
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
          window.localStorage.removeItem('currentUser');
          window.location.reload();
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
        email:form.email,
        password:this.currentUser.password,
        username:form.username
      }
      this.amministratoreService.updateAmministratore(this.amministratore).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          this.currentUser.email=this.amministratore.email;
          this.currentUser.username=this.amministratore.username;
          localStorage.removeItem('currentUser');
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          document.getElementById("modificaAccount").click()
          window.alert("ACCOUNT MODIFICATO")
          window.location.reload();
        },
        (error)=>{
          this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
          window.alert("DATI INSERITI NON CORRETTI O GIA' ESISTENTI RIPROVA");
        }
      )
    }
    if(this.currentUser.tipo=='Azienda'){
      this.azienda={
        id:this.currentUser.id,
        descrizione:form.descrizione,
        email:form.email,
        indirizzo:form.indirizzo,
        logo:this.currentUser.logo,
        nomeAzienda:form.nome,
        password:this.currentUser.password,
        ordini:null,
        prodotti:null,
        vat:form.vat
      }
      this.aziendaService.updateAzienda(this.azienda).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          this.currentUser.descrizione=this.azienda.descrizione;
          this.currentUser.email=this.azienda.email;
          this.currentUser.indirizzo=this.azienda.indirizzo;
          this.currentUser.nome=this.azienda.nomeAzienda;
          this.currentUser.vat=this.azienda.vat;
          localStorage.removeItem('currentUser');
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          document.getElementById("modificaAccount").click()
          window.alert("ACCOUNT MODIFICATO");
          window.location.reload();
        },
        (error)=>{
          this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
          window.alert("DATI INSERITI NON CORRETTI O GIA' ESISTENTI RIPROVA");
        }
      )
    }
    if(this.currentUser.tipo=='Distributore'){
      this.distributore={
        id:this.currentUser.id,
        cognome:form.cognome,
        nome:form.nome,
        email:form.email,
        password:this.currentUser.password,
        idOrdineProva:null,
        indirizzoSede:form.indirizzo,
        ordini:null,
        telefono:form.telefono,
        username:form.username,
        vat:form.vat
      }
      console.log("ciaoooooo "+this.distributore)
      console.log(form.cognome+form.nome+form.email+form.indirizzo+form.telefono+form.username+form.vat)
      this.distributoreService.updateDistributore(this.distributore).subscribe(
        (resp)=>{
          this.log.Debug(ProfiloAziendaComponent.name,"chiamata a back-end", [resp]);
          console.log(this.distributore)
          this.currentUser.nome=this.distributore.nome;
          this.currentUser.cognome=this.distributore.cognome;
          this.currentUser.email=this.distributore.email;
          this.currentUser.indirizzo=this.distributore.indirizzoSede;
          this.currentUser.telefono=this.distributore.telefono;
          this.currentUser.username=this.distributore.username;
          this.currentUser.vat=this.distributore.vat;
          localStorage.removeItem('currentUser');
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          document.getElementById("modificaAccount").click()
          window.alert("ACCOUNT MODIFICATO")
          window.location.reload()
        },
        (error)=>{
          this.log.Error(ProfiloAziendaComponent.name,"chiamata a back-end",error);
          window.alert("DATI INSERITI NON CORRETTI O GIA' ESISTENTI RIPROVA");
        }
      )
    }

  }
}
