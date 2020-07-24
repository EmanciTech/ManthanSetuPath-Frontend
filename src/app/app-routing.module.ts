import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './admin/guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { ConstructionComponent } from './admin/component/construction/construction.component';
import { EnvironmentalComponent } from './admin/component/environmental/environmental.component';
import { MedicalComponent } from './admin/component/medical/medical.component';
import { ClientComponent } from './client/client.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ClientConstructionComponent } from './client/component/client-construction/client-construction.component'
import { ClientEnvironmentalComponent } from './client/component/client-environmental/client-environmental.component';
import { ClientMedicalComponent } from './client/component/client-medical/client-medical.component';
import { AboutusComponent } from './client/component/aboutus/aboutus.component';
import { ContactusComponent } from './client/component/contactus/contactus.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ClientComponent },
  { path: 'admin-login', component: LoginComponent},
  { path: 'construction', component: ClientConstructionComponent},
  { path: 'environmental', component: ClientEnvironmentalComponent},
  { path: 'medical', component: ClientMedicalComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contactus', component: ContactusComponent},
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent, outlet: 'admin', canActivate: [AuthGuard] },
      { path: 'construction', component: ConstructionComponent, outlet: 'admin' },
      { path: 'environmental', component: EnvironmentalComponent, outlet: 'admin' },
      { path: 'medical', component: MedicalComponent, outlet: 'admin' }
    ]
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
