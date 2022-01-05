import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
<<<<<<< HEAD
import { LogService } from './service/log.service';
import { ChartsModule } from 'ng2-charts';
import { GraficoABarraComponent } from './grafico-a-barra/grafico-a-barra.component';
import { ReportMensileComponent } from './report-mensile/report-mensile.component';
import { ReportAnnualeComponent } from './report-annuale/report-annuale.component';
import { GraficoALineaComponent } from './grafico-a-linea/grafico-a-linea.component';
=======
import { LogService } from './services/log.service';
import { GestioneProdottiComponent } from './components/gestione-prodotti/gestione-prodotti.component';
import { GestioneScontiComponent } from './components/gestione-sconti/gestione-sconti.component';
import { GestioneOrdiniRicevutiComponent } from './components/gestione-ordini-ricevuti/gestione-ordini-ricevuti.component';
import { VisualizzaAziendeComponent } from './components/visualizza-aziende/visualizza-aziende.component';
import { VisualizzaProdottiComponent } from './components/visualizza-prodotti/visualizza-prodotti.component';
import { PaginaAziendaComponent } from './components/pagina-azienda/pagina-azienda.component';
import { SelezionaProdottiScontareComponent } from './components/seleziona-prodotti-scontare/seleziona-prodotti-scontare.component';
>>>>>>> 026f4b280cd819be93c355a0ee4dcb73b1bd7b13

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
<<<<<<< HEAD
    GraficoABarraComponent,
    ReportMensileComponent,
    ReportAnnualeComponent,
    GraficoALineaComponent,
=======
    GestioneProdottiComponent,
    GestioneScontiComponent,
    GestioneOrdiniRicevutiComponent,
    VisualizzaAziendeComponent,
    VisualizzaProdottiComponent,
    PaginaAziendaComponent,
    SelezionaProdottiScontareComponent,
>>>>>>> 026f4b280cd819be93c355a0ee4dcb73b1bd7b13
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
