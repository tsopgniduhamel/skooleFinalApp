import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/cours';
import { CoursService } from './../services/cours.service';
import { CurrentPathService } from './../services/current-path.service';

@Component({
  selector: 'app-chapitre-detail',
  templateUrl: './chapitre-detail.component.html',
  styleUrls: ['./chapitre-detail.component.scss'],
})
export class ChapitreDetailComponent implements OnInit {
  currentClasse: string = '';
  currentMatiere: string = '';
  selectedLecon: string = '';
  detailLecon: Cours = {
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
  constructor(
    private coursService: CoursService,
    private currentPathService: CurrentPathService
  ) {}

  ngOnInit(): void {
    this.currentClasse = this.currentPathService.getClasse();
    this.currentMatiere = this.currentPathService.getMatiere();
    this.selectedLecon = this.currentPathService.getLecon();
    // this.detailLecon = this.coursService.getDetailDunChapitre(
    //   this.currentClasse,
    //   this.currentMatiere,
    //   this.selectedLecon
    // );
  }
}
