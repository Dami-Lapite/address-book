import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../Contact';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onDeleteContact: EventEmitter<Contact> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(contact: Contact) {
    this.onDeleteContact.emit(contact);
  }
}
