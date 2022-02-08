import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotto } from 'src/app/models/Prodotto';
import { Utente } from 'src/app/models/Utente';
import { LogService } from 'src/app/services/log.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';
import { ScontoProdottoService } from 'src/app/services/sconto-prodotto/sconto-prodotto.service';

@Component({
  selector: 'app-seleziona-prodotti-scontare',
  templateUrl: './seleziona-prodotti-scontare.component.html',
  styleUrls: ['./seleziona-prodotti-scontare.component.css']
})
export class SelezionaProdottiScontareComponent implements OnInit {
  coloreBordo: boolean=false;
  checked: boolean=false;
  idProdottiSelezionati: number[]=[];
  prodotti:Prodotto[]=[];
  prodottiSelezionati: Prodotto[]=[];

  idSconto:any;


  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"))
  constructor(private activatedRoute: ActivatedRoute, private prodottoService:ProdottoService,private scontoProdottoService:ScontoProdottoService,private log: LogService, private route: Router) { }

  ngOnInit(): void {
    if(this.currentUser != null) {
      this.findProdottiByIDAzienda();
      this.idSconto=JSON.parse(this.activatedRoute.snapshot.params['id']);
    }

  }


  findProdottiByIDAzienda(){
    if(this.currentUser.id!=undefined){
      this.prodottoService.getProdottoByIdAzienda(this.currentUser.id).subscribe(
        (resp)=>{
          this.log.Debug(SelezionaProdottiScontareComponent.name,"chiamata a back-end", [resp]);
          this.prodotti=resp as Prodotto[];
          this.prodotti.forEach(p=>{
            if(p.immagineBlob!=(undefined && null)){
              p.immagineBlob='data:image/jpeg;base64,'+p.immagineBlob;
            }
          })
        },
        (error)=>{
          this.log.Error(SelezionaProdottiScontareComponent.name,"chiamata a back-end",error);
        }
      )
    }
  }


  selezionaProdotti(id, event){
    var bordo=document.getElementById("prodottiContainer"+' '+id);
    const casellaCheck=document.getElementById("checkbox"+' '+id);
     if(event.target.checked){
       bordo.style.borderColor='orange';
       console.log("inserisco "+id);
       this.idProdottiSelezionati.push(id);
     }
     else {
            let x=this.idProdottiSelezionati.find(x=> x==id);
            bordo.style.borderColor='black';
            if(x!==-1)
            this.idProdottiSelezionati.splice(this.idProdottiSelezionati.indexOf(x),1);
      }
  }

  scontaSelezionati(){
    let boolean=true;
    if(this.currentUser.id!=undefined && this.idProdottiSelezionati.length>0){
      for(let i=0;i<this.idProdottiSelezionati.length;i++){
        console.log(this.idProdottiSelezionati[i]+"   "+this.idSconto)
        this.scontoProdottoService.insertScontoProdotto(this.idProdottiSelezionati[i],this.idSconto).subscribe(
          (resp)=>{
            console.log("ENTRO")
            this.log.Debug(SelezionaProdottiScontareComponent.name,"chiamata a back-end", [resp]);
            if(boolean==true){
            window.alert("Sconti inseriti");
            boolean=false;
            }
            this.route.navigateByUrl('/gestioneSconti');
            //this.idSconto=resp;
            //console.log(this.prodotti.forEach(p=>p.nomeProdotto))
          },
          (error)=>{
            this.log.Error(SelezionaProdottiScontareComponent.name,"chiamata a back-end",error);
            window.alert("errore seleziona 1 o più prodotti per applicare lo sconto")
          }
        )
      }
    }
  }
}
