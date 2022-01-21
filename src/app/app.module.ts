import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import { ChartsModule } from 'ng2-charts';
import { GraficoALineaComponent } from './grafico-a-linea/grafico-a-linea.component';

import { LogService } from './services/log.service';
import { GestioneProdottiComponent } from './components/gestione-prodotti/gestione-prodotti.component';
import { GestioneScontiComponent } from './components/gestione-sconti/gestione-sconti.component';
import { GestioneOrdiniRicevutiComponent } from './components/gestione-ordini-ricevuti/gestione-ordini-ricevuti.component';
import { GestioneOrdiniEffettuatiComponent } from './components/gestione-ordini-effettuati/gestione-ordini-effettuati.component';
import { GestioneOrdiniDettagliOrdineComponent } from './components/gestione-ordini-dettagli-ordine/gestione-ordini-dettagli-ordine.component';
import { GestioneOrdiniEffettuaOrdineComponent } from './components/gestione-ordini-effettua-ordine/gestione-ordini-effettua-ordine.component';
import { GestioneOrdiniCampioneComponent } from './components/gestione-ordini-campione/gestione-ordini-campione.component';
import { GestioneOrdiniDownloadComponent } from './components/gestione-ordini-download/gestione-ordini-download.component';
import { GestioneOrdiniUploadComponent } from './components/gestione-ordini-upload/gestione-ordini-upload.component';
import { VisualizzaAziendeComponent } from './components/visualizza-aziende/visualizza-aziende.component';
import { VisualizzaProdottiComponent } from './components/visualizza-prodotti/visualizza-prodotti.component';
import { ProfiloAziendaComponent } from './components/profilo-azienda/profilo-azienda.component';
import { SelezionaProdottiScontareComponent } from './components/seleziona-prodotti-scontare/seleziona-prodotti-scontare.component';
import { GestordEffordCartComponent } from './components/gestione-ordini-effettua-ordine/gestord-efford-cart/gestord-efford-cart.component';
import { ReportAmministratoreComponent } from './components/report-amministratore/report-amministratore.component';
import { GestionePraticheTrasportoComponent } from './components/gestione-pratiche-trasporto/gestione-pratiche-trasporto.component';
import { GraficoABarraComponent } from './grafico-a-barra/grafico-a-barra.component';
import { FormsModule } from '@angular/forms';

import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegistrazioneAziendaComponent } from './components/registrazione-azienda/registrazione-azienda.component';
import { VisualizzaDettagliProdottoComponent } from './components/visualizza-dettagli-prodotto/visualizza-dettagli-prodotto.component';

import { GraficoALineaAziendaComponent } from './components/grafico-a-linea-azienda/grafico-a-linea-azienda.component';
import { GraficoABarraAziendaComponent } from './components/grafico-a-barra-azienda/grafico-a-barra-azienda.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,

    GraficoABarraComponent,
    GraficoALineaComponent,
    GestioneProdottiComponent,
    GestioneScontiComponent,
    GestioneOrdiniRicevutiComponent,
    GestioneOrdiniEffettuatiComponent,
    GestioneOrdiniDettagliOrdineComponent,
    GestioneOrdiniEffettuaOrdineComponent,
    GestioneOrdiniCampioneComponent,
    GestioneOrdiniDownloadComponent,
    GestioneOrdiniUploadComponent,
    VisualizzaAziendeComponent,
    VisualizzaProdottiComponent,
    ProfiloAziendaComponent,
    SelezionaProdottiScontareComponent,
    GestordEffordCartComponent,
    ReportAmministratoreComponent,
    GestionePraticheTrasportoComponent,

    RegistrazioneComponent,
    HomepageComponent,
    RegistrazioneAziendaComponent,
    VisualizzaDettagliProdottoComponent,

    GraficoALineaAziendaComponent,
    GraficoABarraAziendaComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
