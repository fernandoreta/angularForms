import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, onErrorResumeNext } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnVlIEnl1JnuZsv0lmTVlHHcXY9p29OnA',
            {
            email: email,
            password: password,
            returnSecureToken: true
        }
        ).pipe(catchError(this.handleError));
    }

    /**Diffretn path for login same API KEY */
    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnVlIEnl1JnuZsv0lmTVlHHcXY9p29OnA',
            {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse) {
            /** Catching the error on a service with PIPE*/
            const errorMessage = 'An error ocurred!';
            if (!errorRes.error || !errorRes.error.error) {
                return throwError(errorMessage);
            }
            switch (errorRes.error.error.message) {
                case 'EMAIL_EXISTS':
                    return throwError('Email already exists!');
                  break;
                case 'INVALID_PASSWORD':
                    return throwError('Invalid password');
                  break;
                case 'USER_DISABLED':
                    return throwError('User is disabled!');
                  break;
              }
    }
}
