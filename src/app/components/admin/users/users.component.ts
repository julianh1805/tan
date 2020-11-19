import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users = [];
  public view;
  public username;
  public password;
  public confirmPassword;
  public submitted = false;
  public editMode = false;
  public loading = false;
  public i;

  constructor(private router: Router, private usersService: UsersService, private modalService: NgbModal) { }

  ngOnInit() {
    this.loading = true;
    if (this.router.url.includes('ajouter')) {
      this.view = 'add';
      this.loading = false;
    } else {
      this.view = 'set';
      this.get();
    }
  }

  get() {
    this.usersService.getUsers().subscribe(res => {
      this.users = res;
      this.loading = false;
    })
  }

  add() {
    this.submitted = true;
    if (this.username && this.password && this.confirmPassword && this.password === this.confirmPassword) {
      this.usersService.addUser(this.username, this.password).subscribe(res => {
        this.router.navigate(['/admin/utilisateurs/gestion'])
        this.get();
      })
    }
  }

  set(id) {
    this.usersService.setUser(id, this.username).subscribe(res => {
      this.get();
    })
    this.editMode = false;
    this.username = '';
  }

  edit(index) {
    this.editMode = true;
    this.username = '';
    this.i = index;
  }

  cancel() {
    this.username = '';
    this.editMode = false;
  }

  delete(user) {
    let modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.user = user;
    modalRef.result.then((res) => {
      this.loading = true;
      if (res) {
        this.usersService.deleteUser(user.id).subscribe(res => {
          this.get();
        })
      }
    })
  }

}
