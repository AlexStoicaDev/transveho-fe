export interface DashboardEntryPage {
  dashboardEntries: DashboardEntry[];
  pageNumber: number;
}

export enum DashboardEntryStatus {
  completed = 'finalizat',
  pending = 'in desfasurare',
  canceled = 'anulat'
}

export interface DashboardEntry {
  date: string;
  passengerSurname: string;
  passengerName: string;
  passengerPhoneNumber: string;
  transferDate: string;
  route: string;
  planeHour: string;
  status: DashboardEntryStatus;
  pickupAddress: string;
  nrOfPersons: string;
  notes: string;
  deliveryAddress: string;
  paymentMethod: string;
  beneficiary: string;
  transporter: string;
  car: string;
}
