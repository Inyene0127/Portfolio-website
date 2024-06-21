import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { EducationComponent } from '../education/education.component';
import { SkillComponent } from '../skill/skill.component';
import { ProjectComponent } from '../project/project.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { ContactComponent } from '../contact/contact.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    SkillComponent,
    ProjectComponent,
    CertificatesComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
