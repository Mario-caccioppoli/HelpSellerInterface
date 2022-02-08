import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';
import { Ordine } from 'src/app/models/Ordine';
import { Distributore } from 'src/app/models/Distributore';
import { ActivatedRoute } from '@angular/router';
import { OrdineService } from 'src/app/services/ordine/ordine.service';
import { Utente } from 'src/app/models/Utente';
import { Azienda } from 'src/app/models/Azienda';

@Component({
  selector: 'app-gestione-ordini-dettagli-oH krdine',
  templateUrl: './gestione-ordini-dettagli-ordine.component.html',
  styleUrls: ['./gestione-ordini-dettagli-ordine.component.css']
})
export class GestioneOrdiniDettagliOrdineComponent implements OnInit {

  distributore: Distributore;
  azienda: Azienda;
  ordineProdottoArr: OrdineProdotto[];
  ordine: Ordine;

  quantitaOrdineProdotto: number;
  prezzoOrdineProdotto: number;
  idOrd: number;
  

  constructor(private ops: OrdineProdottoService, private os: OrdineService, private log: LogService, private route: ActivatedRoute) { }

  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"));
  ngOnInit(): void {
 
    if((this.currentUser != undefined) && this.currentUser.tipo == "Distributore")
    {
      this.distributore = {
        cognome: this.currentUser.cognome,
        id: this.currentUser.id,
        email: this.currentUser.email,
        idOrdineProva: null,
        indirizzoSede: this.currentUser.indirizzo,
        nome: this.currentUser.nome,
        ordini: null,
        password: this.currentUser.password,
        telefono: this.currentUser.telefono,
        username: this.currentUser.username,
        vat: this.currentUser.vat 
      }
      this.prendiIdDalRouter()
      this.getProdottibyOrdine();
      this.getInfoOrdine();
    }
    if(this.currentUser!=undefined && this.currentUser.tipo=='Azienda'){
      this.azienda={
        id: this.currentUser.id,
        email: this.currentUser.email,
        ordini: null,
        password: this.currentUser.password,
        vat: this.currentUser.vat,
        descrizione:this.currentUser.descrizione,
        indirizzo:this.currentUser.indirizzo,
        logo:this.currentUser.logo,
        nomeAzienda:this.currentUser.nome,
        prodotti:null,
        logoBlob:this.currentUser.logo
      }
      this.prendiIdDalRouter()
      this.getProdottibyOrdine();
      this.getInfoOrdine();
    }
  }

  prendiIdDalRouter() {
    if (this.route.paramMap != undefined && this.route.paramMap != null) {
      this.route.paramMap.subscribe(params =>{
        this.idOrd = Number(params.get('id'));
        }
      )
    }
  }

  getProdottibyOrdine() {
    if(this.idOrd != undefined)
    {
      this.ops.findDettagliOrdine(this.idOrd).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);
          this.ordineProdottoArr = success as OrdineProdotto[];

          var qt=0; var price=0;

          for (var n in this.ordineProdottoArr) {
            qt = qt + this.ordineProdottoArr[n].quantitaOrdine;
            price = price + this.ordineProdottoArr[n].prezzoUnitario * this.ordineProdottoArr[n].quantitaOrdine;
          }

          this.quantitaOrdineProdotto = qt;
          this.prezzoOrdineProdotto = price;
          
        },

        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    }
  }

  getInfoOrdine() {
    if(this.idOrd != undefined)
    {
      this.os.findById(this.idOrd).subscribe(
        (success) => {
          this.log.Debug(GestioneOrdiniDettagliOrdineComponent.name, "ok", [success]);
          this.ordine = success as Ordine;
        },

        (error) => {
          this.log.Error(GestioneOrdiniDettagliOrdineComponent.name, "errore", [error]);
        }
      )
    }
  }


}

