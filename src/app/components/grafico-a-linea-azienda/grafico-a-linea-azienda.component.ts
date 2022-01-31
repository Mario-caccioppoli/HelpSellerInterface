import { Component, Input, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';

@Component({
  selector: 'app-grafico-a-linea-azienda',
  templateUrl: './grafico-a-linea-azienda.component.html',
  styleUrls: ['./grafico-a-linea-azienda.component.css']
})
export class GraficoALineaAziendaComponent implements OnInit {

  @Input() 
  barChartLabels : string[];

  @Input() 
  barChartData : any;
  
  
  constructor( ) { 
   
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
    
  };
  


  barChartType = 'line';
  public barChartLegend = true;

  
  


  ngOnInit(): void {
    
  }
  
  public colors = [
    { backgroundColor:"orange" },
    { backgroundColor:"orange" },
    { backgroundColor:"orange" },
    { backgroundColor:"orange" }
  ];
}
