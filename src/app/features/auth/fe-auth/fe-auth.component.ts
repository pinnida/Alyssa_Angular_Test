import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

// services
import { AuthenticationService } from 'src/shared/services/authentication.service';
import { Auth } from '@angular/fire/auth';
import { SwalService } from 'src/shared/services/swal.service';

@Component({
  selector: 'fe-auth',
  templateUrl: './fe-auth.component.html',
  styleUrls: ['./fe-auth.component.scss']
})
export class FeAuthComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });;

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
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.authenticationSVC.login(email, password).subscribe({
      next: resp => {
        this.router.navigate(['/home']);
      },
      error: err => {
        console.log()
        const inpTitle = 'แจ้งเตือน';
        const inpText = '';
        const inpHtml = err.message;
        this.swalSVC.errorSVC(inpTitle, inpText, inpHtml);
      }
    });

  }
}
