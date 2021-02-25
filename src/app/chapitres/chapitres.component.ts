import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/cours';
import { CoursService } from './../services/cours.service';

@Component({
  selector: 'app-chapitres',
  templateUrl: './chapitres.component.html',
  styleUrls: ['./chapitres.component.scss'],
})
export class ChapitresComponent implements OnInit {
  public tousLesCours: any;
  constructor(private coursService: CoursService) {
    console.log('bonjour');
  }

  getAllChapters() {
    this.coursService.getAllCourses().subscribe((tousLesCours) => {
      this.tousLesCours = tousLesCours;
    });
  }
  ngOnInit(): void {}
}
