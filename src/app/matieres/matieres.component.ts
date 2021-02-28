import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Matiere } from '../models/matiere';
import { CoursService } from '../services/cours.service';
import { CurrentPathService } from '../services/current-path.service';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.scss'],
})
export class MatieresComponent implements OnInit {
  // listeDesMatieres: Array<string> = [
  //   'Maths',
  //   'Physique',
  //   'Chimie',
  //   'Anglais',
  //   'Mecanique',
  //   'SVT',
  // ];

  listeDesMatieres: Array<Matiere> = [];

  constructor(
    private coursService: CoursService,
    private route: ActivatedRoute,
    private router: Router,
    private currentPathService: CurrentPathService
  ) {}

  ngOnInit(): void {
    this.coursService
      .getCoursDuneClasse(this.currentPathService.getClasse())
      .subscribe((listeDesMatieres : any) => {
        this.listeDesMatieres.push( ...listeDesMatieres['result'] );
      });
    console.log('la liste des matieres est : ', this.listeDesMatieres);
  }

  goChapitres(matiere: string) {
    this.router.navigate([
      'cours',
      this.currentPathService.getClasse(),
      matiere,
    ]);
    this.currentPathService.setMatiere(matiere);
  }

  getListeDesMatieres() {}
}
