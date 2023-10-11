import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// services
import { AuthenticationService } from 'src/shared/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$ = this.authenticationSVC.currentUser$;

  constructor(
    private authenticationSVC: AuthenticationService,
    // public usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  logout() {
    this.authenticationSVC.logout().subscribe(() => {
      this.router.navigate(['/auth/login']);
    });
  }
}
