import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestioneOrdiniRicevutiComponent } from './components/gestione-ordini-ricevuti/gestione-ordini-ricevuti.component';
import { GestioneProdottiComponent } from './components/gestione-prodotti/gestione-prodotti.component';
import { GestioneScontiComponent } from './components/gestione-sconti/gestione-sconti.component';
import { ProfiloAziendaComponent } from './components/profilo-azienda/profilo-azienda.component';
import { SelezionaProdottiScontareComponent } from './components/seleziona-prodotti-scontare/seleziona-prodotti-scontare.component';
import { VisualizzaAziendeComponent } from './components/visualizza-aziende/visualizza-aziende.component';
import { VisualizzaProdottiComponent } from './components/visualizza-prodotti/visualizza-prodotti.component';


const routes: Routes = [{
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
    path:'selezionaProdottiScontare',
    component:SelezionaProdottiScontareComponent},
  {
    path:'visualizzaAziende',
    component:VisualizzaAziendeComponent},
  {
    path:'visualizzaProdotti',
    component:VisualizzaProdottiComponent},
  {
    path:'visualizzaProdotti/:id',
    component:VisualizzaProdottiComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
