import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientComponent } from './client.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContentComponent } from './component/content/content.component';
import { TranslateModule } from '@ngx-translate/core';
import { ConstructionComponent } from './construction/construction.component';
import { EnvironmentalComponent } from './environmental/environmental.component';
import { MedicalComponent } from './medical/medical.component';


@NgModule({
  declarations: [ClientComponent, HeaderComponent, FooterComponent, ContentComponent, ConstructionComponent, EnvironmentalComponent, MedicalComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class ClientModule { }
