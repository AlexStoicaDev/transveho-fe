import { CarStatus, EngineType } from '@transveho-core';

export const carsColumns = [
  {
    elementPropertyName: 'plateNumber',
    romanianTranslation: 'NUMAR INMATRICULARE'
  },
  { elementPropertyName: 'model', romanianTranslation: 'MODEL' },
  { elementPropertyName: 'chassisNumber', romanianTranslation: 'NUMAR SASIU' },
  { elementPropertyName: 'engineType', romanianTranslation: 'TIP MOTOR' },
  {
    elementPropertyName: 'itpExpirationDate',
    romanianTranslation: 'D. EXP ITP'
  },
  {
    elementPropertyName: 'rovignetteExpirationDate',
    romanianTranslation: 'D. EXP ROVT'
  },
  {
    elementPropertyName: 'huvignetteExpirationDate',
    romanianTranslation: 'D. EXP HUVT'
  },
  {
    elementPropertyName: 'rcaExpirationDate',
    romanianTranslation: 'D. EXP RCA'
  },
  { elementPropertyName: 'numberOfSeats', romanianTranslation: 'NR LOC' },
  { elementPropertyName: 'rented', romanianTranslation: 'INCHIRIATA' },
  { elementPropertyName: 'inTransit', romanianTranslation: 'TRANSIT' },
  {
    elementPropertyName: 'carStatus',
    romanianTranslation: 'STATUS'
  },
  {
    elementPropertyName: 'actions',
    romanianTranslation: 'ACTIONS'
  }
];
