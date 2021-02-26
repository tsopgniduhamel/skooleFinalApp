import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChapitresComponent } from './chapitres/chapitres.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ExamensComponent } from './examens/examens.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { AideComponent } from './aide/aide.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatieresComponent } from './matieres/matieres.component';
import { ChapitreDetailComponent } from './chapitre-detail/chapitre-detail.component';
import { ProfileEleveComponent } from './profile-eleve/profile-eleve.component';
import { ProfileEnseignantComponent } from './profile-enseignant/profile-enseignant.component';

@NgModule({
  declarations: [
    AppComponent,
    ChapitresComponent,
    AcceuilComponent,
    ExamensComponent,
    ExercicesComponent,
    AideComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    MatieresComponent,
    ChapitreDetailComponent,
    ProfileEleveComponent,
    ProfileEnseignantComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
