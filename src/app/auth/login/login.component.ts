import { AuthService } from './../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitLoading: boolean;
  hide: boolean;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private rotuer: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    try {
      this.isSubmitLoading = true;
      const isSuccessfull = this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
      this.isSubmitLoading = false;
      if (isSuccessfull) {
        this.rotuer.navigate(['/admin']);
      }
    } catch (err: any) {
      console.log(err);
      this.isSubmitLoading = false;
      this.errorMessage = JSON.stringify(err.message);
    }
  }

  onSkip() {
    this.rotuer.navigate(['/public']);
  }
}
