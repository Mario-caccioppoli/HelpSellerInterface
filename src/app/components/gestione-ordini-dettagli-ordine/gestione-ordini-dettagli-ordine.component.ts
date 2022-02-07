import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';
import { Ordine } from 'src/app/models/Ordine';
import { Distributore } from 'src/app/models/Distributore';
import { ActivatedRoute } from '@angular/router';
import { OrdineService } from 'src/app/services/ordine/ordine.service';

@Component({
  selector: 'app-gestione-ordini-dettagli-oH krdine',
  templateUrl: './gestione-ordini-dettagli-ordine.component.html',
  styleUrls: ['./gestione-ordini-dettagli-ordine.component.css']
})
export class GestioneOrdiniDettagliOrdineComponent implements OnInit {

  distributore: Distributore;
  ordineProdottoArr: OrdineProdotto[];
  myStorage = window.localStorage;
  ordine: Ordine;

  quantitaOrdineProdotto: number;
  prezzoOrdineProdotto: number;
  idOrd: number;
  

  constructor(private ops: OrdineProdottoService, private os: OrdineService, private log: LogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.myStorage.getItem('currentUser');
 
    if((this.myStorage.getItem('currentUser') != undefined) && this.checktypeD())
    {
      this.distributore = JSON.parse(this.myStorage.getItem('currentUser')) as Distributore;
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

  checktypeD() {
    const account = this.myStorage.getItem('currentUser');
    const obj = JSON.parse(account);
    const tipo = obj.tipo;
    if (tipo == "Distributore") {
      return true;
    } else {
      return false;
    }
  }

}

