import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Gallagher } from './../gallagher';
import { GallagherService } from './../gallagher.service';

@Component({
  selector: 'app-gallagher-detail',
  templateUrl: './gallagher-detail.component.html',
  styleUrls: ['./gallagher-detail.component.css']
})
export class GallagherDetailComponent implements OnInit {

  gallagher:Gallagher | undefined;

  constructor(
    private route:ActivatedRoute,
    private gallagherService:GallagherService,
    private location:Location
  ) { }

  ngOnInit(): void {
  }

  getGallagher(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gallagherService.getGallagher(id)
      .subscribe(gallagher => this.gallagher = gallagher);
  }

  goBack(): void {
    this.location.back();
  }

}
