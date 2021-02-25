import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.scss'],
})
export class MatieresComponent implements OnInit {
  constructor(private router: Router, private activelink: ActivatedRoute) {
    console.log("I'm there");
  }

  ngOnInit(): void {
    console.log(this.activelink.snapshot.params['classe']);
  }
}
