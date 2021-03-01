import { Injectable } from '@angular/core';
import { Cours } from '../models/cours';

@Injectable({
  providedIn: 'root',
})
export class CurrentPathService {
  classe: string = '';
  matiere: string = '';
  chapitre: string = '';
  lecon: any;

  getClasse(): string {
    return this.classe;
  }
  getMatiere(): string {
    return this.matiere;
  }
  getChapitre(): string {
    return this.chapitre;
  }
  getLecon(): any {
    return this.lecon;
  }
  setClasse(classe: string) {
    this.classe = classe;
  }
  setMatiere(matiere: string) {
    this.matiere = matiere;
  }
  setChapitre(chapitre: string) {
    this.chapitre = chapitre;
  }
  setLecon(lecon: string) {
    this.lecon = lecon;
  }
  constructor() {}
}
