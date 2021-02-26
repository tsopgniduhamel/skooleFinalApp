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
  public tousLesCours: any;
  constructor(
    private coursService: CoursService,
    private router: Router,
    private currentPathService: CurrentPathService
  ) {
    console.log('bonjour');
  }

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

  ngOnInit(): void {}
}
