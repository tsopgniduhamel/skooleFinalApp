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

  constructor(private http: HttpClient) {}

  getCoursDuneClasse(classe: string): Observable<any> {
    let classe1 = '1';
    switch (classe) {
      case 'sixieme':
        classe1 = '1';
        break;
      case 'cinquieme':
        classe1 = '2';
        break;
      case 'quatrieme':
        classe1 = '3';
        break;
      case 'troisieme':
        classe1 = '4';
        break;
      case 'seconde':
        classe1 = '5';
        break;
      case 'premiere':
        classe1 = '6';
        break;
      case 'terminale':
        classe1 = '7';
        break;
      default:
        console.log('No such class exists!');
        break;
    }

    return this.http.get<any>(
      this.apiUrl + 'api/getSubjectClass/' + classe1
    );
  }

  getChapitresDuneMatiereDuneClasse(
    classe: string,
    matiere: string
  ): Observable<Cours[]> {
    let matiere1: string = '';
    let classe1: string = '';
    switch (matiere) {
      case 'physique':
        matiere1 = '1';
        break;
      case 'mathematiques':
        matiere1 = '2';
        break;
      case 'chimie':
        matiere1 = '3';
        break;
      case 'biologie':
        matiere1 = '4';
        break;
      case 'geographie':
        matiere1 = '5';
        break;
      case 'mecanique':
        matiere1 = '6';
        break;
      default:
        console.log('No such subject exists!');
        break;
    }
    switch (classe) {
      case 'sixieme':
        classe1 = '1';
        break;
      case 'cinquieme':
        classe1 = '2';
        break;
      case 'quatrieme':
        classe1 = '3';
        break;
      case 'troisieme':
        classe1 = '4';
        break;
      case 'seconde':
        classe1 = '5';
        break;
      case 'premiere':
        classe1 = '6';
        break;
      case 'terminale':
        classe1 = '7';
        break;
      default:
        console.log('No such class exists!');
        break;
    }
    return this.http.get<Cours[]>(
      this.apiUrl + 'api/course/' + '?subject=' + matiere1 + '&level=' + classe1
    );
  }

  getDetailDunChapitre(idLecon: string): Observable<Cours> {
    return this.http.get<Cours>(this.apiUrl + 'api/course/' + idLecon);
  }
}
