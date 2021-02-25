import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
})
export class AcceuilComponent implements OnInit {
  // private level = '';
  // private cheminMatieres = '/matieres/' + this.level;
  public numberMatiere: string = '6';
  constructor(private router: Router) {}

  // onClickClasse() {
  //   this.router.navigate(['/aide']);
  //   console.log(this.level);
  // }
  onClickRessource() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}
}
