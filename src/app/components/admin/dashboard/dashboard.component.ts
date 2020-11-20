import { ModalComponent } from './../modal/modal.component';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public trams = [];
  public lignes = [];
  public trajets = [];

  loading = false;
  date;
  ligne;
  time;
  tramToDeploy;
  tramToDeployDate;
  tramToDeployLigne;

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit() {
    this.loading = true;
    this.dataService.getLignes().subscribe(res => {
      console.log(res)
      this.lignes = res;
      var ligne = this.lignes.shift();
      this.lignes.push(ligne)
      this.loading = false;
    })
  }

  submit() {
    let modalRef = this.modalService.open(ModalComponent);
    modalRef.result.then((res) => {
      if (res) {
        console.log(res)
        this.tramToDeploy = res.res[0];
        this.tramToDeployDate = res.date.day + '/' + res.date.month + '/' + res.date.year + ' de ' + res.time.hour + 'h à ' + (res.time.hour + 1) + 'h'
        this.tramToDeployLigne = +res.ligne
      }
    })
  }

}
