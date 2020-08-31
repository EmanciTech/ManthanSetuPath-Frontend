import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './admin/guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { ConstructionComponent } from './admin/component/construction/construction.component';
import { ConsultancyComponent } from './admin/component/consultancy/consultancy.component';
import { OtherServicesComponent } from './admin/component/other-services/other-services.component';
import { ClientComponent } from './client/client.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ClientConstructionComponent } from './client/component/client-construction/client-construction.component'
import { ClientEnvironmentalComponent } from './client/component/client-environmental/client-environmental.component';
import { ClientMedicalComponent } from './client/component/client-medical/client-medical.component';
import { AboutusComponent } from './client/component/aboutus/aboutus.component';
import { ContactusComponent } from './client/component/contactus/contactus.component';
import { HomeComponent } from './client/component/home/home.component';
import { ClientsComponent } from './client/component/clients/clients.component';
import { OtherserviceComponent } from './client/component/otherservice/otherservice.component';

const routes: Routes = [
  {
    path: '', component: ClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'otherservice', component: OtherserviceComponent },
      { path: 'medical/:servicename', component: ClientMedicalComponent },
      { path: 'environmental/:servicename', component: ClientEnvironmentalComponent },
      { path: 'construction/:servicename', component: ClientConstructionComponent }
    ]
  },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'consultancy', component: ConsultancyComponent, canActivate: [AuthGuard] },
      { path: 'construction', component: ConstructionComponent, canActivate: [AuthGuard] },
      { path: 'otherservices', component: OtherServicesComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: 'admin-login', component: LoginComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
