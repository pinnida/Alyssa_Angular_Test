import { Component } from '@angular/core';

// services
import { AuthenticationService } from 'src/shared/services/authentication.service';

@Component({
  selector: 'fe-home',
  templateUrl: './fe-home.component.html',
  styleUrls: ['./fe-home.component.scss']
})
export class FeHomeComponent {
  user$ = this.authenticationSVC.currentUser$;

  constructor(
    private authenticationSVC: AuthenticationService,
  ) {}

}
