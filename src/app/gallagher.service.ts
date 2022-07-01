import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Gallagher } from './gallagher';
import { GALLAGHERS } from './mock-gallaghers';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GallagherService {

  constructor(private messageService: MessageService) { }

  getGallaghers(): Observable<Gallagher[]> {
    const gallaghers = of(GALLAGHERS);
    this.messageService.add('GallagherService: fetched gallaghers');
    return gallaghers;
  }
}
