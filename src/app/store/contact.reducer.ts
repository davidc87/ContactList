import { IContact } from './contact.model';
import { ContactTypeActions } from './contact.action';

export function ContactReducer(state: IContact[] = [], action): IContact[] {
    switch (action.type) {
        case ContactTypeActions.ADD_CONTACT: {
            return [...state, action.payload];
        }
        case ContactTypeActions.REMOVE_CONTACT: {
            state.splice(state.indexOf(action.payload), 1);
            return state;
        }
        case ContactTypeActions.EDIT_CONTACT: {
            const id = action.payload.id;
            const contact = action.payload.value;
            state.map(c => {
                if (c.id == id) {
                    c.firstName = contact.firstName;
                    c.lastName = contact.lastName;
                    c.phoneNumber = contact.phoneNumber;
                }
            });
            return state;
        }
    }
    return state;
}