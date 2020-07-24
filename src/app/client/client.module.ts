import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContentComponent } from './component/content/content.component';
import { TranslateModule } from '@ngx-translate/core';
import { ClientConstructionComponent } from './component/client-construction/client-construction.component';
import { ClientEnvironmentalComponent } from './component/client-environmental/client-environmental.component';
import { ClientMedicalComponent } from './component/client-medical/client-medical.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';



@NgModule({
  declarations: [
    ClientComponent, 
    HeaderComponent, 
    FooterComponent, 
    ContentComponent, ClientConstructionComponent, ClientEnvironmentalComponent, ClientMedicalComponent, AboutusComponent, ContactusComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ]
})
export class ClientModule { }
