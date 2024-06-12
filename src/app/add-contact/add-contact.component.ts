import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

interface Contact {
  name: string;
  email: string;
}

@Component({
  selector: 'scl-add-contact',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.sass'
})
export class AddContactComponent {
  newContact : Contact = { name: '', email: '' };
  contacts: Contact[]= [];

  addContact() {
    if (this.newContact.name && this.newContact.email) {
      this.contacts.push({ ...this.newContact });
      this.newContact = { name: '', email: '' };
    }
  }

  removeContact(contact: Contact) {

  }
}


