import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public user: string;
  userDelete = false;
  lignes = [1, 2, 3];
  minDate = { year: 2021, month: 1, day: 1 };
  date;
  ligne = 0;
  time = { hour: 13, minute: 30 };
  constructor(public modal: NgbActiveModal, public dataService: DataService) { }

  ngOnInit() {
    if (this.user) {
      this.userDelete = true;
    }
  }

  delete() {
    this.modal.close(true);
  }

  selectOption(id: number) {
    this.ligne = id;
  }

  submit() {
    this.dataService.getPredictions(this.date.year, this.date.month, this.date.day, this.time.hour, this.ligne).subscribe(res => {
      console.log(res)
      this.modal.close({ date: this.date, time: this.time, ligne: this.ligne, res: res });
    })
  }

}
