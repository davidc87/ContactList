import { Action } from "@ngrx/store";

export enum ContactTypeActions {
    ADD_CONTACT = 'ADD_CONTACT',
    REMOVE_CONTACT = 'REMOVE_CONTACT',
    EDIT_CONTACT = 'EDIT_CONTACT'
}

export class AddContact implements Action {
    readonly type = ContactTypeActions.ADD_CONTACT;
    constructor(private payload: any) { }
}

export class RemoveContact implements Action {
    readonly type = ContactTypeActions.REMOVE_CONTACT;
    constructor(private payload: any) { }
}

export class EditContact implements Action {
    readonly type = ContactTypeActions.EDIT_CONTACT;
    constructor(private payload: any) { }
}