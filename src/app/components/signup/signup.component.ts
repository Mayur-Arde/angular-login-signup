import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { validateCallback } from '@firebase/util';
import { AuthenticationService } from 'src/app/services/authentication.service';


export const passwordMatchValidator : ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null =>{
  return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value ? null : {'passwordDontMatch' : true}
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  
  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  },{ validators: passwordMatchValidator}
  )
  constructor(private authService : AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  get name(){
    return this.signUpForm.get('name');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get password(){
    return this.signUpForm.get('password');
  }

  get confirmPassword(){
    return this.signUpForm.get('confirmPassword')
  }


  submit(){
    if(!this.signUpForm.valid){
      return
    }

    const{ email, password} = this.signUpForm.value;

    if (password.length < 6){
      window.alert('passowrd should greater then 6')
    }

    this.authService.signUp(email, password).subscribe(()=>{
      this.router.navigate(['../login'])
    })

  }
}
