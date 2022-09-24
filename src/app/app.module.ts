import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EliCalComponent } from './eli-cal/eli-cal.component';
import { EmiCalComponent } from './emi-cal/emi-cal.component';
import { AppForComponent } from './app-for/app-for.component';
import { AboUsComponent } from './abo-us/abo-us.component';
import { UseLogComponent } from './use-log/use-log.component';
import { AdmLogComponent } from './adm-log/adm-log.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EliCalComponent,
    EmiCalComponent,
    AppForComponent,
    AboUsComponent,
    UseLogComponent,
    AdmLogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
