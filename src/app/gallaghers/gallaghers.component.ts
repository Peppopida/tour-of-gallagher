import { Component, OnInit } from '@angular/core';

import { Gallagher } from '../gallagher';
import { GallagherService } from '../gallagher.service';
import { MessageService } from '../message.service';
import { GALLAGHERS } from '../mock-gallaghers';

@Component({
  selector: 'app-gallaghers',
  templateUrl: './gallaghers.component.html',
  styleUrls: ['./gallaghers.component.css']
})
export class GallaghersComponent implements OnInit {

  gallaghers = GALLAGHERS;
  selectedGallagher?: Gallagher;

  constructor(private gallagherService: GallagherService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getGallaghers();
  }

  getGallaghers(): void {
    this.gallagherService.getGallaghers()
        .subscribe(gallaghers => this.gallaghers = gallaghers);
  }
}
