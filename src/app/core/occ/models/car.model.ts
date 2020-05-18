export enum CarStatus {
  Available,
  OnRoute,
  Defective
}

export enum EngineType {
  Gasoline,
  Diesel,
  BioDiesel,
  NaturalGas,
  Electric
}

export interface Car {
  /**
   * @member {number} [id]
   */
  id: number;
  /**
   * @member {string} [plateNumber]
   */
  plateNumber: string;
  /**
   * @member {string} [model]
   */
  model: string;
  /**
   * @member {number} [numberOfSeats]
   */
  numberOfSeats: number;
  /**
   * @member {string} [chassisNumber]
   */
  chassisNumber: string;
  /**
   * @member {EngineType} [engineType]
   */
  engineType: EngineType;
  /**
   * @member {boolean} [rented]
   */
  rented: boolean;
  /**
   * @member {boolean} [inTransit]
   */
  inTransit: boolean;
  /**
   * @member {CarStatus} [status]
   */
  status: CarStatus;
  /**
   * @member {Date} [itpExpirationDate]
   */
  itpExpirationDate: Date;
  /**
   * @member {Date} [rovignetteExpirationDate]
   */
  rovignetteExpirationDate: Date;
  /**
   * @member {Date} [huvignetteExpirationDate]
   */
  huvignetteExpirationDate: Date;
  /**
   * @member {Date} [rcaExpirationDate]
   */
  rcaExpirationDate: Date;
  /**
   * @member {string} [others]
   */
  others: string;
}
