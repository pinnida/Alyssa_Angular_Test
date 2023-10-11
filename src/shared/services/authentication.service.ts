import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { Observable, catchError, from , throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$ = authState(this.afAuth);


  constructor(
    private afAuth: Auth
  ) { }


  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.afAuth, email, password))
    .pipe(
      catchError(error => {
        console.error('Firebase Error:', error);
        return throwError(() => error);
      })
    );
  }


  logout() {
    return from(this.afAuth.signOut());
  }

}

