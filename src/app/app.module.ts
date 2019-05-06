import { FilterPipe } from './fitler.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { StoreModule } from '@ngrx/store';
import { ContactReducer } from './store/contact.reducer';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ListContactComponent,
    EditContactComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      contacts: ContactReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
