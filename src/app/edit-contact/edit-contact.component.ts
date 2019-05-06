import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IContact } from '../store/contact.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EditContact } from '../store/contact.action';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contacts: IContact[];
  id: any;
  editForm: FormGroup;
  constructor(private store: Store<AppState>, private router: ActivatedRoute,
    private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNo: ['', Validators.required]
    })
    this.id = this.router.snapshot.paramMap.get('id');
    this.store.select('contacts').subscribe(data =>
      this.contacts = data
    );
    const contact = this.contacts.filter(f => f.id == this.id)[0];
    this.editForm.controls['firstName'].setValue(contact.firstName);
    this.editForm.controls['lastName'].setValue(contact.lastName);
  }

  onEditContact() {
    this.store.dispatch(new EditContact({
      id: this.id,
      value: {
        firstName: this.editForm.controls.firstName.value,
        lastName: this.editForm.controls.lastName.value,
        phoneNumber: this.editForm.controls.phoneNo.value
      }
    }));
    this.route.navigate(['/']);
  }

  gotoOverview() {
  }

}
