import { Component, OnInit } from '@angular/core';
import { GALLAGHERS } from '../mock-gallaghers';

@Component({
  selector: 'app-gallaghers',
  templateUrl: './gallaghers.component.html',
  styleUrls: ['./gallaghers.component.css']
})
export class GallaghersComponent implements OnInit {

  gallaghers = GALLAGHERS;

  constructor() { }

  ngOnInit(): void {
  }

}
