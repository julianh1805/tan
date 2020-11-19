import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public activeLink: string = "dashboard";
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (!this.router.url.includes('utilisateurs')) {
      this.activeLink = this.router.url.replace('/admin/', '');
    } else {
      this.activeLink = 'utilisateurs';

    }
  }

  changeRoute(route) {
    this.activeLink = route;
  }

  onNavigate(route) {
    this.changeRoute('utilisateurs');
    this.router.navigate(['admin/utilisateurs', route]);
  }

  logout() {
    this.authService.logout();
  }

}
