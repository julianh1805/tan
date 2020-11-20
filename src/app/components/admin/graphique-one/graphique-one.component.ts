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
    }
  ];

  params = 'year';

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  loading = false;

  date: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fetchPrevisions();
  }

  fetchPrevisions() {
    this.loading = true;
    this.params = 'prevision';
    let lineChartData = [
      { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Ligne 1' },
      { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Ligne 2' },
      { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Ligne 3' },
    ];
    for (let i = 1; i <= 3; i++) {
      this.dataService.getPredictions(2021, null, null, null, i).subscribe(res => {
        res.map(prevision => {
          let month = new Date(prevision.date).getMonth();
          let value = lineChartData[prevision.ligne_id - 1].data[month];
          lineChartData[prevision.ligne_id - 1].data[month] = value + prevision.prediction;
        })
      })
    }
    setTimeout(() => {
      this.lineChartData = lineChartData;
      this.lineChartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aôut', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      this.loading = false;
    }, 2000)
  }

  // fetchYear() {
  //   this.lineChartData = [
  //     { data: [85, 72, 78, 75, 77, 75, 75, 77, 75, 75, 77], label: 'Ligne 1' },
  //     { data: [23, 45, 100, 65, 56, 87, 45, 65, 76, 35, 65], label: 'Ligne 2' },
  //     { data: [54, 76, 26, 76, 24, 76, 45, 76, 25, 76, 42], label: 'Ligne 3' },
  //   ];
  //   this.lineChartLabels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  //   this.params = 'year';
  // }

  // fetchMonth() {
  //   this.lineChartData = [
  //     { data: [85, 72, 78, 75, 77, 75, 75, 77, 75, 75, 77, 75], label: 'Ligne 1' },
  //     { data: [23, 45, 100, 65, 56, 87, 45, 65, 76, 35, 65, 43], label: 'Ligne 2' },
  //     { data: [54, 76, 26, 76, 24, 76, 45, 76, 25, 76, 42, 54], label: 'Ligne 3' },
  //   ];

  //   this.lineChartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aôut', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  //   this.params = 'month';
  // }

  onClick(event) {
    console.log(event);
  }

}
