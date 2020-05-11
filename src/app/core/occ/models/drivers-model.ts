import {
  PersonalRole,
  PersonalStatus,
  SpokenLanguages
} from './personal-model';

export enum DrivingLicenseCategory {
  B,
  B1,
  BE,
  C1,
  C1E,
  C,
  CE,
  D1,
  D1E,
  D
}

/**
 * An interface representing the Driver entity
 */
export interface Driver {
  /**
   * @member {number} [id]
   */
  id: number;
  /**
   * @member {string} [username]
   */
  username: string;
  /**
   * @member {string} [email]
   */
  email: string;
  /**
   * @member {PersonalRole} [role]
   */
  role: PersonalRole;
  /**
   * @member {DrivingLicenseCategory} [drivingLicenseCategory]
   */
  drivingLicenseCategory: DrivingLicenseCategory;
  /**
   * @member {SpokenLanguages} [spokenLanguage]
   */
  spokenLanguage: SpokenLanguages;
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
   * @member {PersonalStatus} [userStatus]
   */
  userStatus: PersonalStatus;
}
