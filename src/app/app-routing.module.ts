import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ConstructionComponent } from './admin/component/construction/construction.component';
import { EnvironmentalComponent } from './admin/component/environmental/environmental.component';
import { MedicalComponent } from './admin/component/medical/medical.component';
import { ClientComponent } from './client/client.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ClientComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: AdminComponent },
      { path: 'construction', component: ConstructionComponent, outlet: 'admin' },
      { path: 'environmental', component: EnvironmentalComponent, outlet: 'admin' },
      { path: 'medical', component: MedicalComponent, outlet: 'admin' }
    ]
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
