import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-enseignant',
  templateUrl: './profile-enseignant.component.html',
  styleUrls: ['./profile-enseignant.component.scss'],
})
export class ProfileEnseignantComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ajouterNouveauCours() {
    console.log('nouveau cours ajouté');
  }
}
