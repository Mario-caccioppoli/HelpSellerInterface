import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LogService } from './services/log.service';
import { GestioneProdottiComponent } from './components/gestione-prodotti/gestione-prodotti.component';
import { GestioneScontiComponent } from './components/gestione-sconti/gestione-sconti.component';
import { GestioneOrdiniRicevutiComponent } from './components/gestione-ordini-ricevuti/gestione-ordini-ricevuti.component';
import { VisualizzaAziendeComponent } from './components/visualizza-aziende/visualizza-aziende.component';
import { VisualizzaProdottiComponent } from './components/visualizza-prodotti/visualizza-prodotti.component';
import { ProfiloAziendaComponent } from './components/profilo-azienda/profilo-azienda.component';
import { SelezionaProdottiScontareComponent } from './components/seleziona-prodotti-scontare/seleziona-prodotti-scontare.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    GestioneProdottiComponent,
    GestioneScontiComponent,
    GestioneOrdiniRicevutiComponent,
    VisualizzaAziendeComponent,
    VisualizzaProdottiComponent,
    ProfiloAziendaComponent,
    SelezionaProdottiScontareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
