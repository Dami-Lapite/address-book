import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddContact: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddContact(): void {
    this.showAddContact = !this.showAddContact;
    this.subject.next(this.showAddContact);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
