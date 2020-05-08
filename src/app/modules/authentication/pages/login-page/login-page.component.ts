import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { AuthenticationService } from '../../../../core/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  //  private authenticationService: AuthenticationService
  ) {
    // if (this.authenticationService.currentUser) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // if (this.loginFormGroup.invalid) {
    //   return;
    // }
    // const formControls = this.loginFormGroup.controls;
    // this.authenticationService
    //   .logIn(formControls.email.value, formControls.password.value)
    //   .pipe(first())
    //   .subscribe(userData => {
    //     this.authenticationService.handleAuthentication(userData);
    //     this.router.navigate(['/home']);
    //   });
  }
}
