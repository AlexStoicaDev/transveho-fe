import { Component, OnInit } from '@angular/core';
import { Passenger, SnackBarService } from '@transveho-core';
import { PassengersService } from './service/passengers.service';

@Component({
  selector: 'passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {
  constructor(
    private readonly passengersService: PassengersService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {}

  //TODO add unsubscribe to all subscriptions
  openPassengerModal() {
    this.passengersService.getAllRoutes().subscribe(routes => {
      this.passengersService
        .openCreatePassengerModal(routes)
        .afterClosed()
        .subscribe(result => {
          if (result?.action === 'create') {
            this.createPassenger(result.newPassenger);
          }
        });
    });
  }

  createPassenger(newPassenger: Passenger) {
    this.passengersService
      .createPassenger(newPassenger)
      .subscribe(newPassenger => {
        this.snackBarService.openSnackBar(
          `Pasagerul cu numele: ${newPassenger.firstName}  ${newPassenger.lastName} a fost creata!`
        );
      });
  }
}
