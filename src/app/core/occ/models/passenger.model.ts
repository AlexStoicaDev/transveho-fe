export enum PaymentMethod {
  Cash,
  Pos,
  Online,
  Other
}

export enum TransportType {
  Private,
  Shuttle
}

export enum PassengerStatus {
  TransferDone,
  OnRoute,
  Assigned,
  NotAssigned,
  Canceled
}

/**
 * An interface representing the Passenger entity
 */
export interface Passenger {
  /**
   * @member {number} [id]
   */
  id: number;
  /**
   * @member {number} [numberOfCoPassengers]
   */
  numberOfCoPassengers: number;
  /**
   * @member {number} [numberOfAdults]
   */
  numberOfAdults: number;
  /**
   * @member {number} [numberOfChildren]
   */
  numberOfChildren: number;
  /**
   * @member {number} [numberOfInfants]
   */
  numberOfInfants: number;
  /**
   * @member {string} [email]
   */
  email: string;
  /**
   * @member {string} [lastName]
   */
  lastName: string;
  /**
   * @member {string} [firstName]
   */
  firstName: string;
  /**
   * @member {string} [phoneNumber]
   */
  phoneNumber: string;
  /**
   * @member {number} [routeId]
   */
  routeId: number;
  /**
   * @member {PaymentMethod} [paymentMethod]
   */
  paymentMethod: PaymentMethod;
  /**
   * @member {TransportType} [transportType]
   */
  transportType: TransportType;
  /**
   * @member {string} [pickUpAddress]
   */
  pickUpAddress: string;
  /**
   * @member {string} [destinationAddress]
   */
  destinationAddress: string;
  /**
   * @member {Date} [pickUpDateTime]
   */
  pickUpDateTime: string;
  /**
   * @member {Date} [flightDateTime]
   */
  flightDateTime: Date;
  /**
   * @member {string} [flightDetails]
   */
  flightDetails: string;
  /**
   * @member {string} [returnPickUpAddress]
   */
  returnPickUpAddress: string;
  /**
   * @member {string} [destinationAddress]
   */
  returnDestinationAddress: string;
  /**
   * @member {Date} [returnPickUpDateTime]
   */
  returnPickUpDateTime: Date;
  /**
   * @member {string} [returnFlightDetails]
   */
  returnFlightDetails: string;
  /**
   * @member {boolean} [returnTransfer]
   */
  returnTransfer: boolean;
  /**
   * @member {boolean} [paidForTransfer]
   */
  paidForTransfer: boolean;
  /**
   * @member {PassengerStatus} [status]
   */
  status: PassengerStatus;
}
