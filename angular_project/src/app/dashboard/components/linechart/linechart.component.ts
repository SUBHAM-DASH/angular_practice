import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from '../../dashboard.service';
Chart.register(...registerables);

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  constructor(private _dashboard: DashboardService) { }

  ngOnInit(): void {
    this._dashboard.gpsPushDataSend.subscribe((res: any) => {
      console.log(res);
      const myChart = new Chart('gps-push', {
        type: 'line',
        data: {
          labels: ["GPS-PUSH"],
          datasets: [{
            label: 'total count',
            data: [res.length],
            backgroundColor: [
              'red',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })


  }

}
