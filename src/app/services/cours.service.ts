import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../models/cours';

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

  constructor(private http: HttpClient) {}

  getCoursDuneClasse(classe: string): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.apiUrl + 'api/' + classe);
  }

  getChapitresDuneMatiereDuneClasse(classe: string, matiere: string) {}

  getDetailDunChapitre(classe: string, matiere: string, titre: string) {}
}
