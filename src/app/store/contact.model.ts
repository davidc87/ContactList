export interface AppState {
    contacts: IContact[]
}

export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: number;
}