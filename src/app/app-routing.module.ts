import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AideComponent } from './aide/aide.component';
import { ChapitreDetailComponent } from './chapitre-detail/chapitre-detail.component';
import { ChapitresComponent } from './chapitres/chapitres.component';
import { ExamensComponent } from './examens/examens.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { LoginComponent } from './login/login.component';
import { MatieresComponent } from './matieres/matieres.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileEleveComponent } from './profile-eleve/profile-eleve.component';
import { ProfileEnseignantComponent } from './profile-enseignant/profile-enseignant.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'cours', component: AcceuilComponent },
  { path: 'examens', component: ExamensComponent },
  { path: 'exercices', component: ExercicesComponent },
  { path: 'aide', component: AideComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'cours/:classe',
    component: MatieresComponent,
  },
  {
    path: 'cours/:classe/:subject',
    component: ChapitresComponent,
  },
  {
    path: 'cours/:classe/:subject/:title',
    component: ChapitreDetailComponent,
  },
  { path: 'profile-eleve', component: ProfileEleveComponent },
  { path: 'profile-enseignant', component: ProfileEnseignantComponent },
  { path: '', pathMatch: 'full', component: AcceuilComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
