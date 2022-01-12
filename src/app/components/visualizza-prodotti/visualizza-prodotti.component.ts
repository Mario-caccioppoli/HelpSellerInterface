import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { ProdottoServiceService } from 'src/app/services/prodotto-service.service';

@Component({
  selector: 'app-visualizza-prodotti',
  templateUrl: './visualizza-prodotti.component.html',
  styleUrls: ['./visualizza-prodotti.component.css']
})
export class VisualizzaProdottiComponent implements OnInit {

  fromBackEnd : any;
  constructor(private prodottoService : ProdottoServiceService,private log : LogService) { }

  ngOnInit(): void {
    this.prodottoService.getProdottoByIdAzienda(1).subscribe(
      (resp) => {
        this.log.Debug(VisualizzaProdottiComponent.name,"chiamata a back-end",resp);
        this.fromBackEnd = resp;
      },
      (error) => {
        this.log.Error(VisualizzaProdottiComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

}
