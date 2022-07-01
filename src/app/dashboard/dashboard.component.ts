import { GallagherService } from './../gallagher.service';
import { Gallagher } from './../gallagher';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  gallaghers:Gallagher[] = [];

  constructor(private gallagherService:GallagherService) { }

  ngOnInit(): void {
    
  }

  getHeroes(): void {
    this.gallagherService.getGallaghers()
      .subscribe(gallaghers => this.gallaghers = gallaghers.slice(1, 5));
  }

}
