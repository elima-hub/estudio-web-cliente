import { Component } from '@angular/core';
import { ContactRow } from '../contact-row/contact-row';
import { Contact } from '../../models/contact';
import { App } from '../../app';

@Component({
  selector: 'app-contact-list',
  imports: [ContactRow, App],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  contacts: Contact[] = [
    {id: 1, name: 'Elias', email: 'elias@hotmail.com'},
    {id: 2, name: 'Marco', email: 'marco@hotmail.com'},
    {id: 3, name: 'Sergio', email: 'sergio@hotmail.com'},
    {id: 4, name: 'Ginebra', email: 'ginebra@hotmail.com'}
  ]
}

