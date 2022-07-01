import { Component, Input, OnInit } from '@angular/core';

import { Gallagher } from '../gallagher';

@Component({
  selector: 'app-gallagher-detail',
  templateUrl: './gallagher-detail.component.html',
  styleUrls: ['./gallagher-detail.component.css']
})
export class GallagherDetailComponent implements OnInit {

  @Input() gallagher?: Gallagher;

  constructor() { }

  ngOnInit(): void {
  }

}
