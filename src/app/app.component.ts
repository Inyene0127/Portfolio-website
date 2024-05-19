import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { EducationComponent } from '../education/education.component';
import { SkillComponent } from '../skill/skill.component';
import { ProjectComponent } from '../project/project.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    SkillComponent,
    ProjectComponent,
    CertificatesComponent,
    ContactComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
