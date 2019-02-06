///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ElementRef, Injector, ViewChild, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { alert, prompt } from 'tns-core-modules/ui/dialogs/dialogs';

import { NgZone } from '@angular/core';
import { AuthenticationService } from '../../../core/auth/authentication.service';

@Component({
    templateUrl: './login.view.component.html',
    styleUrls: ['./login.view.component.css']
})
export class LoginViewBaseComponent {
    user: any;
    @ViewChild('username')
    username: ElementRef;
    @ViewChild('password')
    password: ElementRef;

    zone: NgZone;
    routerExtensions: RouterExtensions;
    authenticationService: AuthenticationService;

    constructor(protected $injector: Injector) {
        this.zone = $injector.get(NgZone);
        this.routerExtensions = $injector.get(RouterExtensions);
        this.authenticationService = $injector.get(AuthenticationService);

        this.user = {
            username: '',
            password: ''
        };
    }

    login() {
        this.authenticationService
            .signIn(this.user)

            .subscribe(
                () => {
                    this.zone.run(() => {
                        this.routerExtensions.navigate(['']);
                    });
                },
                err => {
                    this.alert(`An error occurred: ${err}`);
                }
            );
    }

    submit() {
        if (!this.user.username || !this.user.password) {
            this.alert('Please provide both username and password.');
            return;
        }

        this.login();
    }

    navigateToRegister() {
        this.routerExtensions.navigate(['application', 'register']);
    }

    forgotPassword() {
        prompt({
            title: 'Forgot Password',
            message: 'Enter the email address you used to register to reset your password.',
            inputType: 'email',
            defaultText: '',
            okButtonText: 'Ok',
            cancelButtonText: 'Cancel'
        }).then(data => {
            if (data.result) {
                this.authenticationService.resetPassword(data.text.trim()).subscribe(
                    () => {
                        this.alert(
                            'Your password was successfully reset. Please check your email for instructions on choosing a new password.'
                        );
                    },
                    () => {
                        this.alert('Unfortunately, an error occurred resetting your password.');
                    }
                );
            }
        });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    private alert(message: string) {
        return alert({
            title: '',
            okButtonText: 'OK',
            message: message
        });
    }
}
