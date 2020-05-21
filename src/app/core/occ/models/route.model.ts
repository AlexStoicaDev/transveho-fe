/**
 * An interface representing the Route entity
 */
export interface Route {
  /**
   * @member {number} [id]
   */
  id: number;
  /**
   * @member {number} [returnRouteId]
   */
  returnRouteId: number;
  /**
   * @member {string} [toLocation]
   */
  toLocation: string;
  /**
   * @member {string} [fromLocation]
   */
  fromLocation: string;
  /**
   * @member {number} [distanceInKm]
   */
  distanceInKm: number;
  /**
   * @member {number} [priceInRon]
   */
  priceInRon: number;
  /**
   * @member {number} [priceInEur]
   */
  priceInEur: number;
  /**
   * @member {boolean} [transitRoute]
   */
  transitRoute: boolean;
  /**
   * @member {string} [notes]
   */
  notes: string;
}
