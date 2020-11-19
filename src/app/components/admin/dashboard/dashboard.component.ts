import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public trams = [];
  public lignes = [];
  public trajets = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getTrajets().subscribe(res => {
    //   this.trajets = res;
    //   console.log(this.trajets)
    // })

    // this.dataService.getLignes().subscribe(res => {
    //   this.lignes = res;
    //   console.log(this.lignes)
    // })

    // this.dataService.getTrams().subscribe(res => {
    //   this.trams = res;
    //   console.log(this.trajets)
    // })
  }

}
