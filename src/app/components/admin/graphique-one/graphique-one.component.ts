import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphique-one',
  templateUrl: './graphique-one.component.html',
  styleUrls: ['./graphique-one.component.scss']
})
export class GraphiqueOneComponent implements OnInit {
  lineChartData = [
    { data: [85, 72, 78, 75, 77, 75, 75, 77, 75, 75, 77, 75], label: 'Ligne 1' },
    { data: [23, 45, 100, 65, 56, 87, 45, 65, 76, 35, 65, 43], label: 'Ligne 2' },
    { data: [54, 76, 26, 76, 24, 76, 45, 76, 25, 76, 42, 54], label: 'Ligne 3' },
    { data: [45, 62, 64, 65, 66, 65, 65, 66, 65, 65, 66, 75], label: 'Ligne 4' },
  ];

  lineChartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aôut', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors = [
    {
      borderColor: '#189b42',
      backgroundColor: 'rgba(255,255,0,0.0)',
    },
    {
      borderColor: '#e53138',
      backgroundColor: 'rgba(255,255,0,0.0)',
    },
    {
      borderColor: '#0079bc',
      backgroundColor: 'rgba(255,255,0,0.0)',
    }, {
      borderColor: '#fdc600',
      backgroundColor: 'rgba(255,255,0,0.0)',
    },
  ];

  params = 'year';

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  loading = false;

  date: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDatas(2020, null, null, 1).subscribe(res => {
      console.log(res);
    })
    this.fetchYear();
  }

  fetchDefault() {
    console.log(this.date)
    this.params = 'default';
  }

  fetchYear() {
    this.lineChartData = [
      { data: [85, 72, 78, 75, 77, 75, 75, 77, 75, 75, 77], label: 'Ligne 1' },
      { data: [23, 45, 100, 65, 56, 87, 45, 65, 76, 35, 65], label: 'Ligne 2' },
      { data: [54, 76, 26, 76, 24, 76, 45, 76, 25, 76, 42], label: 'Ligne 3' },
      { data: [45, 62, 64, 65, 66, 65, 65, 66, 65, 65, 66], label: 'Ligne 4' },
    ];
    this.lineChartLabels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
    this.params = 'year';
  }

  fetchMonth() {
    this.lineChartData = [
      { data: [85, 72, 78, 75, 77, 75, 75, 77, 75, 75, 77, 75], label: 'Ligne 1' },
      { data: [23, 45, 100, 65, 56, 87, 45, 65, 76, 35, 65, 43], label: 'Ligne 2' },
      { data: [54, 76, 26, 76, 24, 76, 45, 76, 25, 76, 42, 54], label: 'Ligne 3' },
      { data: [45, 62, 64, 65, 66, 65, 65, 66, 65, 65, 66, 75], label: 'Ligne 4' },
    ];

    this.lineChartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aôut', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    this.params = 'month';
  }

  fetchDay() {
    this.lineChartData = [
      { data: [85, 72, 78, 75, 77, 75, 75], label: 'Ligne 1' },
      { data: [23, 45, 100, 65, 56, 87, 45], label: 'Ligne 2' },
      { data: [54, 76, 26, 76, 24, 76, 45], label: 'Ligne 3' },
      { data: [45, 62, 64, 65, 66, 65, 65], label: 'Ligne 4' },
    ];
    this.lineChartLabels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    this.params = 'day';
  }

}
