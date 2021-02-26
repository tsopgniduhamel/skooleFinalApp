import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cours } from '../models/cours';
import { CoursService } from './../services/cours.service';
import { CurrentPathService } from './../services/current-path.service';

@Component({
  selector: 'app-chapitres',
  templateUrl: './chapitres.component.html',
  styleUrls: ['./chapitres.component.scss'],
})
export class ChapitresComponent implements OnInit {
  tousLesCours: any;
  constructor(
    private coursService: CoursService,
    private router: Router,
    private currentPathService: CurrentPathService
  ) {}

  goLecon(titre: string) {
    this.router.navigate([
      'cours',
      this.currentPathService.getClasse(),
      this.currentPathService.getMatiere(),
      titre,
    ]);
    this.currentPathService.setLecon(titre);
    console.log(this.router.url);
  }

  ngOnInit(): void {
    this.coursService
      .getChapitresDuneMatiereDuneClasse(
        this.currentPathService.getClasse(),
        this.currentPathService.getMatiere()
      )
      .subscribe((tousLesCours) => {
        this.tousLesCours = tousLesCours;
      });
    console.log('la route courante est : ', this.router.url);
    console.log('voici la liste des cours: ', this.tousLesCours);
  }
}
