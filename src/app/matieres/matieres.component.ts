import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { CoursService } from '../services/cours.service';
import { CurrentPathService } from '../services/current-path.service';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.scss'],
})
export class MatieresComponent implements OnInit {
  listeDesMatieres: Array<string> = [
    'Maths',
    'Physique',
    'Chimie',
    'Anglais',
    'Mecanique',
    'SVT',
  ];
  constructor(
    private coursService: CoursService,
    private route: ActivatedRoute,
    private router: Router,
    private currentPathService: CurrentPathService
  ) {
    this.route.params.subscribe((params) => console.log(params));
  }
  ngOnInit(): void {
    console.log('la liste des matieres est : ', this.listeDesMatieres);
  }

  goChapitres(matiere: string) {
    this.router.navigate([
      'cours',
      this.currentPathService.getClasse(),
      matiere,
    ]);
    this.currentPathService.setMatiere(matiere);
    console.log('la route courante est : ', this.router.url);
  }

  getListeDesMatieres() {}
}
