import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IContact } from '../store/contact.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contacts: IContact[];
  id: any;
  constructor(private store: Store<AppState>, private router: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.store.select('contacts').subscribe(data =>
      this.contacts = data
    );
    const contact = this.contacts.filter(f => f.id === this.id);
    console.log(contact);
  }

}
