import { Component } from '@angular/core';
import { input } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-row',
  imports: [],
  templateUrl: './contact-row.html',
  styleUrl: './contact-row.css',
})
export class ContactRow {
  contact = input.required<Contact>();
}
