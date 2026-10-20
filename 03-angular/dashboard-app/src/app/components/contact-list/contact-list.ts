import { Component } from '@angular/core';
import { ContactRow } from '../contact-row/contact-row';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-list',
  imports: [ContactRow],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  contacts: Contact[] = [
    {id: 1, name: 'Elias', email: 'elias@hotmail.com'},
    {id: 2, name: 'Marco', email: 'marco@hotmail.com'},
    {id: 3, name: 'Sergio', email: 'sergio@hotmail.com'}
  ]
}

