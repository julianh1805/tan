import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public submitted = false;
  public username: string;
  public password: string;
  public unknown: boolean = false;
  public loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.username && this.password) {
      this.authService.signIn(this.username, this.password).subscribe(res => {
        this.router.navigate(['/admin/dashboard']);
        this.loading = false;
      }, error => {
        this.unknown = true;
        this.loading = false;
      });
    }
  }

}
