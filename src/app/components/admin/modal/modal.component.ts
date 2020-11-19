import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public user: string;
  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.user);
  }

  delete() {
    this.modal.close(true);
  }

}
