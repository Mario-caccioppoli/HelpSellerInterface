import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarAziendaComponent } from './components/sidebar-azienda/sidebar-azienda.component';
import { SidebarDistributoreComponent } from './components/sidebar-distributore/sidebar-distributore.component';
import { SiderbarAmministratoreComponent } from './components/siderbar-amministratore/siderbar-amministratore.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    SidebarAziendaComponent,
    SidebarDistributoreComponent,
    SiderbarAmministratoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
