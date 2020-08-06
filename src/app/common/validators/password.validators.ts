import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve({ invalidOldPassword: true });
            else resolve(null);
        });
    }

    static validPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== 'abcd') //need to figure a legit verification method
                resolve({ invalidPassword: true });
            else resolve(null);
        })
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value)
            return { passwordsShouldMatch: true };       
        return null;
    }

    //probably could handle this w/ 1 function and default args, but couldnt figure this out
    static account_passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('password');
        let confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value)
            return { passwordsShouldMatch: true };       
        return null;
    }
}