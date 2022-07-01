import { Component, OnInit } from '@angular/core';

import { Gallagher } from '../gallagher';
import { GALLAGHERS } from '../mock-gallaghers';

@Component({
  selector: 'app-gallaghers',
  templateUrl: './gallaghers.component.html',
  styleUrls: ['./gallaghers.component.css']
})
export class GallaghersComponent implements OnInit {

  gallaghers = GALLAGHERS;
  selectedGallagher?: Gallagher;

  constructor() { }

  ngOnInit(): void {
    
  }

  onSelect(gallagher: Gallagher): void {
    this.selectedGallagher = gallagher;
  }
}
