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
import { ChartsModule } from 'ng2-charts';
import { GraficoABarraComponent } from './grafico-a-barra/grafico-a-barra.component';
import { ReportMensileComponent } from './report-mensile/report-mensile.component';
import { ReportAnnualeComponent } from './report-annuale/report-annuale.component';
import { GraficoALineaComponent } from './grafico-a-linea/grafico-a-linea.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    GraficoABarraComponent,
    ReportMensileComponent,
    ReportAnnualeComponent,
    GraficoALineaComponent,
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
