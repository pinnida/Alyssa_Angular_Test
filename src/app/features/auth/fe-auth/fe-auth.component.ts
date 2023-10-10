import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'fe-auth',
  templateUrl: './fe-auth.component.html',
  styleUrls: ['./fe-auth.component.scss']
})
export class FeAuthComponent {
  constructor(
    private router: Router,
  ) { }

  login() {
    this.router.navigate(['/home']);
   }
}
