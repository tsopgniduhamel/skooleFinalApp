import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
import { CoursService } from './services/cours.service';
import { CurrentPathService } from './services/current-path.service';
import { ExamenEpreuvesComponent } from './examen-epreuves/examen-epreuves.component';
import { ExamenEpreuveDetailComponent } from './examen-epreuve-detail/examen-epreuve-detail.component';
import { ExercicesClassesComponent } from './exercices-classes/exercices-classes.component';
import { ExercicesMatiereComponent } from './exercices-matiere/exercices-matiere.component';
import { ExerciceDetailComponent } from './exercice-detail/exercice-detail.component';

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
    ExamenEpreuvesComponent,
    ExamenEpreuveDetailComponent,
    ExercicesClassesComponent,
    ExercicesMatiereComponent,
    ExerciceDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [CoursService, CurrentPathService],
  bootstrap: [AppComponent],
})
export class AppModule {}
