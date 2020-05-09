export enum PersonalStatus {
  available = 'disponibil',
  onPaidLeave = 'concediu',
  medicalLeave = 'concediu medical',
  dayOf = 'zi libera',
  unavailable = 'fost angajat'
}

export interface PersonalEntriesPage {
  dispatcherEntries: PersonalEntry[];
  pageNumber: number;
}

export interface PersonalEntry {
  surname: string;
  name: string;
  email: string;
  address: string;
  cnp: string;
  series: string;
  phoneNumber: string;
  driversLicenceCategory: string;
  knownForeignLanguages: string;
  status: PersonalStatus;
}
