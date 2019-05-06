import { AppState, IContact } from './../store/contact.model';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveContact } from '../store/contact.action';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {

  contacts: any;
  isEdit: boolean;
  constructor(private store: Store<AppState>, private router: Router,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.store.select('contacts').subscribe(data => {
      this.contacts = data;
      this.cdr.detectChanges();
    })
  }

  addContact() {
    this.router.navigate(['/add-contact']);
  }

  deleteContact(contact) {
    this.store.dispatch(new RemoveContact(contact));
  }

  editContact(id) {
    this.router.navigate(['/edit-contact', id]);
  }
}
