import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../models/cours';
import { Matiere } from '../models/matiere';

@Injectable({
  providedIn: 'root',
})
export class CoursService {
  apiUrl: string = 'http://franklinduval.pythonanywhere.com/';
  coursDuneClasse: Array<string> = [];
  chapitresDuneMatiereDuneClasse: Array<Cours> = [];
  detailDunChapitre: Cours = {
    id: 1,
    title: '',
    detailImage: '',
    video: '',
    content: '',
    rating: 0,
    keywords: '',
    upload_date: '',
    update_date: '',
    validated: false,
    subject: '',
    level: '',
  };

  classeToId = {
    sixieme: '1',
    cinquieme: '2',
    quatrieme: '3',
    troisieme: '4',
    seconde: '5',
    premiere: '6',
    terminale: '7',
  };

  matiereToId = {
    physique: '1',
    mathematiques: '2',
    chimie: '3',
    biologie: '4',
  };

  constructor(private http: HttpClient) {}

  getCoursDuneClasse(classe: string): Observable<Array<Matiere>> {
    return this.http.get<Array<Matiere>>(this.apiUrl + 'api/getSubjectClass/1');
  }

  getChapitresDuneMatiereDuneClasse(classe: string, matiere: string) {
    return this.http.get<Array<Cours>>(this.apiUrl + 'api/course/');
  }

  getDetailDunChapitre(classe: string, matiere: string, titre: string) {}
}
