import { AddContact } from './../store/contact.action';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }

  onAddContact() {
    this.store.dispatch(new AddContact({
      id: Math.floor(Math.random() * (1000 - 0 + 1)),
      firstName: this.addForm.controls.firstName.value,
      lastName: this.addForm.controls.lastName.value
    }));
  }
}
