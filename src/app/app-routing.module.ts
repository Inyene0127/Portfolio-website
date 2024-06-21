import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { AppComponent } from './app.component';
import { EducationComponent } from '../education/education.component';
import { SkillComponent } from '../skill/skill.component';
import { ProjectComponent } from '../project/project.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { ContactComponent } from '../contact/contact.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'education', component: EducationComponent },
    { path: 'skills', component: SkillComponent },
    { path: 'projects', component: ProjectComponent },
    { path: 'certificates', component: CertificatesComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}