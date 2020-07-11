import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContentComponent } from './component/content/content.component';
import { ConstructionComponent } from './component/construction/construction.component';
import { EnvironmentalComponent } from './component/environmental/environmental.component';
import { MedicalComponent } from './component/medical/medical.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminComponent, HeaderComponent, FooterComponent, ContentComponent, ConstructionComponent, EnvironmentalComponent, MedicalComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
