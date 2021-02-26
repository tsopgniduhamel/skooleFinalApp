import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.scss'],
})
export class MatieresComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => console.log(params));
  }

  ngOnInit(): void {
    // console.log(this.activelink.snapshot.params['classe']);
  }
}
