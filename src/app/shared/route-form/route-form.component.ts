import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@transveho-core';

@Component({
  selector: 'route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss']
})
export class RouteFormComponent implements OnInit {
  @Input()
  route: Route;
  routeFormGroup: FormGroup;

  @Output() onSubmitOutput: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.routeFormGroup = this.formBuilder.group(this.getControlsConfig());
  }

  private getControlsConfig() {
    return {
      toLocation: [
        this.route.toLocation,
        [Validators.required, Validators.minLength(4), Validators.maxLength(12)]
      ],
      fromLocation: [
        this.route.fromLocation,
        [Validators.required, Validators.minLength(4), Validators.maxLength(12)]
      ],
      distanceInKm: [
        this.route.distanceInKm,
        [Validators.required, Validators.min(0)]
      ],
      priceInRon: [
        this.route.priceInRon,
        [Validators.required, Validators.min(0)]
      ],
      priceInEur: [
        this.route.priceInEur,
        [Validators.required, Validators.min(0)]
      ],
      transitRoute: [this.route.transitRoute.toString()],
      notes: [
        this.route.notes,
        [Validators.minLength(3), Validators.maxLength(255)]
      ]
    };
  }

  isRouteFormValid(): boolean {
    return this.routeFormGroup.valid;
  }

  getRouteFromFormControls(): Route {
    const routeFormControls = this.routeFormGroup.controls;
    return {
      id: this.route.id,
      returnRouteId: this.route.returnRouteId,
      distanceInKm: routeFormControls.distanceInKm.value,
      fromLocation: routeFormControls.fromLocation.value,
      toLocation: routeFormControls.toLocation.value,
      notes: routeFormControls.notes.value,
      priceInEur: routeFormControls.priceInEur.value,
      priceInRon: routeFormControls.priceInRon.value,
      transitRoute: routeFormControls.transitRoute.value === 'true'
    };
  }

  onSubmit() {
    if (this.isRouteFormValid()) {
      this.onSubmitOutput.emit();
    }
  }
}
