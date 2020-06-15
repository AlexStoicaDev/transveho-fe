import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Passenger, Transfer } from '@transveho-core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrentTransferService } from './service/current-transfer.service';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import * as polyline from '@mapbox/polyline';
import { GoogleMapsAPIWrapper } from '@agm/core';

interface LongitudeAndLatitude {
  latitude: number;
  longitude: number;
}

interface Location extends LongitudeAndLatitude {
  address: string;
}

interface LongitudeAndLatitudeGeoCodeApi {
  lat: number;
  lng: number;
}

export interface AddressComponent {
  long_name: string;
  short_name: string;
}

export interface LocationGeometry {
  location: LongitudeAndLatitudeGeoCodeApi;
}

export interface GeoCodeApiResult {
  address_components: [AddressComponent];
  geometry: LocationGeometry;
  formatted_address: string;
}

@Component({
  selector: 'current-transfer',
  templateUrl: './current-transfer.component.html',
  styleUrls: ['./current-transfer.component.scss']
})
export class CurrentTransferComponent implements OnInit {
  currentTransfer: Transfer = null;
  pickUpLocation: Location;
  destinationLocation: Location;
  locationFormGroup: FormGroup;
  passenger: Passenger;
  location: Location;
  polyLine: [LongitudeAndLatitude];

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private currentTransferService: CurrentTransferService,
    private cdRef: ChangeDetectorRef
  ) {
    this.currentTransfer = this.activatedRoute.snapshot.data.currentTransfer;
    this.passenger = this.currentTransfer.passenger;
  }

  ngOnInit(): void {
    const pickUpAddress = this.currentTransfer.passenger.pickUpAddress;
    const destinationAddress = this.currentTransfer.passenger
      .destinationAddress;

    this.locationFormGroup = this.formBuilder.group(this.getControlsConfig());
    // this.setPolylineLocations(pickUpAddress, destinationAddress);
  }

  getControlsConfig() {
    return {
      location: [this.location?.address, Validators.maxLength(50)]
    };
  }

  onSubmit() {
    // if (this.locationFormGroup.valid) {
    //     this.setGeoLocationFromAddress(
    //         this.locationFormGroup.controls['location'].value
    //     );
    // }
  }
  //
  // setPolylineLocations(pickUpAddress: string, destinationAddress: string) {
  //     const currentLocationObservable = this.currentTransferService.getCurrentLocation();
  //
  //     const pickUpObservable = this.currentTransferService
  //         .getGeoLocationFromAddress(pickUpAddress)
  //         .pipe(
  //             map(data => {
  //                 if (data && data.results && data.results.length > 0) {
  //                     return data.results[0];
  //                 }
  //                 return data;
  //             })
  //         );
  //     const destinationObservable = this.currentTransferService
  //         .getGeoLocationFromAddress(destinationAddress)
  //         .pipe(
  //             map(data => {
  //                 if (data && data.results && data.results.length > 0) {
  //                     return data.results[0];
  //                 }
  //                 return data;
  //             })
  //         );
  //     forkJoin([
  //         pickUpObservable,
  //         destinationObservable,
  //         currentLocationObservable
  //     ]).subscribe(results => {
  //         console.log(results);
  //         this.pickUpLocation = {
  //             latitude: results[0].geometry.location.lat,
  //             longitude: results[0].geometry.location.lng,
  //             address: results[0].formatted_address
  //         };
  //         this.destinationLocation = {
  //             latitude: results[1].geometry.location.lat,
  //             longitude: results[1].geometry.location.lng,
  //             address: results[1].formatted_address
  //         };
  //         this.location = results[2];
  //         this.locationFormGroup.controls['location'].setValue(results[2]?.address);
  //         this.setPolyLine();
  //     });
  // }
  //
  // setPolyLine() {
  //     this.currentTransferService
  //         .getDirectionsApiRoute(
  //             this.location,
  //             this.pickUpLocation,
  //             this.destinationLocation
  //         )
  //         .subscribe(data => {
  //             const codedPolyline =
  //                 data &&
  //                 data.routes &&
  //                 data.routes.length > 0 &&
  //                 data.routes[0].overview_polyline;
  //             if (codedPolyline) {
  //                 this.polyLine = polyline.decode(codedPolyline.points).map(point => {
  //                     return {latitude: point[0], longitude: point[1]};
  //                 });
  //             }
  //         });
  // }
  //
  // setGeoLocationFromAddress(address: string) {
  //     this.currentTransferService
  //         .getGeoLocationFromAddress(address)
  //         .subscribe(data => {
  //             if (data && data.results && data.results.length > 0) {
  //                 this.setLocationFromGeoCodeApiResult(data.results[0]);
  //             }
  //         });
  // }
  //
  setLocationByMarkerDragging($event: any) {
    // this.currentTransferService
    //     .getAddressFromGeoLocation($event.coords.lat, $event.coords.lng)
    //     .subscribe(data => {
    //         if (data && data.results && data.results.length > 0) {
    //             this.setLocationFromGeoCodeApiResult(data.results[0]);
    //         }
    //     });
  }
  //
  // setLocationFromGeoCodeApiResult(geoCodeApiLocation: GeoCodeApiResult) {
  //     this.location = {
  //         latitude: geoCodeApiLocation.geometry.location.lat,
  //         longitude: geoCodeApiLocation.geometry.location.lng,
  //         address: geoCodeApiLocation.formatted_address
  //     };
  //     this.locationFormGroup.controls['location'].setValue(this.location.address);
  //     this.setPolyLine();
  //     this.cdRef.detectChanges();
  // }
}
