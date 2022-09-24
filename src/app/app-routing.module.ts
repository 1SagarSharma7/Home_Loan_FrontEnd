import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboUsComponent } from './abo-us/abo-us.component';
import { AdmLogComponent } from './adm-log/adm-log.component';
import { AppForComponent } from './app-for/app-for.component';
import { AdmDasComponent } from './adm-das/adm-das.component';
import { EliCalComponent } from './eli-cal/eli-cal.component';
import { EmiCalComponent } from './emi-cal/emi-cal.component';
import { HomeComponent } from './home/home.component';
import { UseLogComponent } from './use-log/use-log.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'eli-cal', component:EliCalComponent},
  {path:'emi-cal', component:EmiCalComponent},
  {path:'app-for', component:AppForComponent},
  {path:'abo-us', component:AboUsComponent},
  {path:'adm-log', component:AdmLogComponent},
  {path:'use-log', component:UseLogComponent},
  {path:'adm-das', component:AdmDasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
