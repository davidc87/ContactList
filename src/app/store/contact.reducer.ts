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
            return state;
        }
    }
    return state;
}