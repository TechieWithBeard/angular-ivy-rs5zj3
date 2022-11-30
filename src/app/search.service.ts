import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor() {}
  subject = new BehaviorSubject('');

  seachData(data: string) {
    this.subject.next(data);
  }
}
