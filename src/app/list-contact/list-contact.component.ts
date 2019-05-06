import { AppState, IContact } from './../store/contact.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveContact } from '../store/contact.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {

  contacts: Observable<any>;
  isEdit: boolean;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.contacts = this.store.select('contacts');
  }

  addContact() {
    this.router.navigate(['/add-contact']);
  }

  deleteContact(contact) {
    this.store.dispatch(new RemoveContact(contact));
  }

  editContact(id) {
    this.router.navigate(['/edit-contact']);
  }
}
