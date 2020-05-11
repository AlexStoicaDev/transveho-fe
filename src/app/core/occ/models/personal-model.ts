export enum PersonalStatus {
  Available, DayOff, Holiday, Medical, Former
}

export enum SpokenLanguages{
  RO, EN, FR, DE, IT, ES
}

export enum PersonalRole{
  ADMIN, DISPATCHER, DRIVER
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
