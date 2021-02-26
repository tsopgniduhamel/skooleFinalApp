import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CurrentPathService } from './../services/current-path.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
})
export class AcceuilComponent implements OnInit {
  constructor(
    private router: Router,
    private currentPathService: CurrentPathService
  ) {}

  goMatiere(classe: string) {
    this.router.navigate(['cours', classe]);
    this.currentPathService.setClasse(classe);
    // console.log(this.router.url);
  }

  onClickRessource() {}

  ngOnInit(): void {}
}
