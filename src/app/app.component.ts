import { Component } from '@angular/core';
import { UiService } from './services/ui.service';
import { Subscription } from 'rxjs';
declare const uniqueID: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'address-book';
  showAddContact: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddContact = value));
  }

  toggleAddContact() {
    this.uiService.toggleAddContact();
  }
}
