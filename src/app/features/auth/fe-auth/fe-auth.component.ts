import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

// services
import { AuthenticationService } from 'src/shared/services/authentication.service';
import { Auth } from '@angular/fire/auth';
import { SwalService } from 'src/shared/services/swal.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'fe-auth',
  templateUrl: './fe-auth.component.html',
  styleUrls: ['./fe-auth.component.scss']
})
export class FeAuthComponent {
  showLoading: boolean = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private authenticationSVC: AuthenticationService,
    private swalSVC: SwalService,
    private router: Router,
    private fb: NonNullableFormBuilder
  ) { }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  submit() {
    this.showLoading = true;
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.authenticationSVC.login(email, password)
    .pipe(
      finalize(() => {
        this.showLoading = false;
      }))
    .subscribe({
      next: resp => {
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        const inpTitle = 'Error';
        const inpText = '';
        const inpHtml = err.message;
        this.swalSVC.errorSVC(inpTitle, inpText, inpHtml);
      }
    });

  }
}
