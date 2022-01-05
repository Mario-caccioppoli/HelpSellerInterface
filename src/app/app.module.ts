import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LogService } from './service/log.service';
import { GestioneProdottiComponent } from './components/gestione-prodotti/gestione-prodotti.component';
import { GestioneScontiComponent } from './components/gestione-sconti/gestione-sconti.component';
import { GestioneOrdiniRicevutiComponent } from './components/gestione-ordini-ricevuti/gestione-ordini-ricevuti.component';
import { GestioneOrdiniEffettuatiComponent } from './components/gestione-ordini-effettuati/gestione-ordini-effettuati.component';
import { GestioneOrdiniDettagliOrdineComponent } from './components/gestione-ordini-dettagli-ordine/gestione-ordini-dettagli-ordine.component';
import { GestioneOrdiniEffettuaOrdineComponent } from './components/gestione-ordini-effettua-ordine/gestione-ordini-effettua-ordine.component';
import { GestioneOrdiniCampioneComponent } from './components/gestione-ordini-campione/gestione-ordini-campione.component';
import { GestioneOrdiniDownloadComponent } from './components/gestione-ordini-download/gestione-ordini-download.component';
import { GestioneOrdiniUploadComponent } from './components/gestione-ordini-upload/gestione-ordini-upload.component';

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
    GestioneOrdiniEffettuatiComponent,
    GestioneOrdiniDettagliOrdineComponent,
    GestioneOrdiniEffettuaOrdineComponent,
    GestioneOrdiniCampioneComponent,
    GestioneOrdiniDownloadComponent,
    GestioneOrdiniUploadComponent,
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
