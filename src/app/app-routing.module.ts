import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestioneOrdiniDettagliOrdineComponent } from './components/gestione-ordini-dettagli-ordine/gestione-ordini-dettagli-ordine.component';
import { GestioneOrdiniEffettuaOrdineComponent } from './components/gestione-ordini-effettua-ordine/gestione-ordini-effettua-ordine.component';
import { GestioneOrdiniEffettuatiComponent } from './components/gestione-ordini-effettuati/gestione-ordini-effettuati.component';
import { GestioneOrdiniRicevutiComponent } from './components/gestione-ordini-ricevuti/gestione-ordini-ricevuti.component';
import { GestioneProdottiComponent } from './components/gestione-prodotti/gestione-prodotti.component';
import { GestioneScontiComponent } from './components/gestione-sconti/gestione-sconti.component';
import { ProfiloAziendaComponent } from './components/profilo-azienda/profilo-azienda.component';
import { ReportAmministratoreComponent } from './components/report-amministratore/report-amministratore.component';
import { SelezionaProdottiScontareComponent } from './components/seleziona-prodotti-scontare/seleziona-prodotti-scontare.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VisualizzaAziendeComponent } from './components/visualizza-aziende/visualizza-aziende.component';
import { VisualizzaProdottiComponent } from './components/visualizza-prodotti/visualizza-prodotti.component';


const routes: Routes = [
  {
    path:'gestioneOrdini',
    component:GestioneOrdiniRicevutiComponent},
  {
    path:'gestioneProdotti',
    component:GestioneProdottiComponent},
  {
    path:'gestioneSconti',
    component:GestioneScontiComponent},
  {
    path:'profiloAzienda',
    component:ProfiloAziendaComponent},
  {
    path:'profiloAzienda/:id',
    component:ProfiloAziendaComponent
                                     },
  {
    path:'gestioneVendite',
    component:ReportAmministratoreComponent
                                     },
  {
    path:'selezionaProdottiScontare',
    component:SelezionaProdottiScontareComponent},
  {
    path:'visualizzaAziende',
    component:VisualizzaAziendeComponent},
  {
    path:'visualizzaProdotti',
    component:VisualizzaProdottiComponent},
  {
    path:'visualizzaOrdini',
    component:GestioneOrdiniEffettuatiComponent
  },
  {
    path:'effettuaOrdine-TEST',
    component:GestioneOrdiniEffettuaOrdineComponent
  },
  {
    path:'dettagliOrdine-TEST',
    component:GestioneOrdiniDettagliOrdineComponent
  },
  {
    path:'visualizzaProdotti/:id',
    component:VisualizzaProdottiComponent
  },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
