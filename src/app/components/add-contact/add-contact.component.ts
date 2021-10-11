import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../Contact';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
declare function uniqueId(): string;
declare function checkContact(contact: any): boolean;

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  @Output() onAddContact: EventEmitter<Contact> = new EventEmitter();
  fname: string;
  lname: string;
  email: string;
  phone: string;
  showAddContact: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddContact = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    const newContact = {
      id: '',
      first_name: this.fname,
      last_name: this.lname,
      email: this.email,
      phone_number: this.phone,
    };

    if (checkContact(newContact)) {
      newContact.id = uniqueId();
      this.onAddContact.emit(newContact);
      this.fname = '';
      this.lname = '';
      this.email = '';
      this.phone = '';
    } else {
      alert('Please fill all fields correctly!');
    }
  }
}
