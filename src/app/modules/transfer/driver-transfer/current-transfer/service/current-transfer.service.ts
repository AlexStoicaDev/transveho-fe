import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {CurrentTransfer, OccDriverTransferService, Transfer} from '@transveho-core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

@Injectable()
export class CurrentTransferService {
  constructor(
    private readonly occDriverTransferService: OccDriverTransferService,
    private readonly http: HttpClient
  ) {}

  getCurrentTransfer(): Observable<CurrentTransfer> {
    return this.occDriverTransferService.getCurrentTransfer();
  }

  getCurrentLocation(): Observable<Location> {
    // return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=11f6da72fc52de0196fdb2aab5d38eca')
    return of({
      latitude: 45.753231048583984,
      longitude: 21.231029510498047,
      address: 'Timisoara Romania'
    });
  }

  getGeoLocationFromAddress(address: string): Observable<any> {
    const url =
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      address.replace(' ', '%20') +
      '&key=AIzaSyCzKKVgFL89spGJqRlR6yFLP0bEjM1XaNY';
    // return of({url});
    return this.http.get<any>(url);
  }

  getAddressFromGeoLocation(
    latitude: number,
    longitude: number
  ): Observable<any> {
    const url =
      'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
      latitude +
      ',' +
      longitude +
      '&key=AIzaSyCzKKVgFL89spGJqRlR6yFLP0bEjM1XaNY';
    return this.http.get<any>(url);
  }

  getDirectionsApiRoute(
    origin: Location,
    wayPoint: Location,
    destination: Location
  ): Observable<any> {
    const url =
      'https://maps.googleapis.com/maps/api/directions/json?' +
      'origin=' +
      origin.latitude +
      ',' +
      origin.longitude +
      '&destination=' +
      destination.latitude +
      ',' +
      destination.longitude +
      '&waypoints=' +
      wayPoint.latitude +
      '%2C' +
      wayPoint.longitude +
      '&key=AIzaSyCzKKVgFL89spGJqRlR6yFLP0bEjM1XaNY';

    return this.http.get<any>(url);
  }

  startTransfer(passengerId: number,carId:number):Observable<any> {
    return this.occDriverTransferService.startTransfer(passengerId,carId);
  }

  finishTransfer(passengerId: number,carId:number):Observable<any> {
    return this.occDriverTransferService.finishTransfer(passengerId,carId);
  }
}
