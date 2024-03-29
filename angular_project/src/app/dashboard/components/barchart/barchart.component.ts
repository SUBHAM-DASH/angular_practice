import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from '../../dashboard.service';
Chart.register(...registerables);

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  constructor(private _dashboard:DashboardService) { }

  ngOnInit(): void {

    this._dashboard.orderDataSend.subscribe((res:any)=>{
      console.log(res);
      const myChart = new Chart('orders', {
        type: 'bar',
        data: {
          labels: ['Orders'],
          datasets: [{
            label: 'Total orders',
            data: [res.length],
            backgroundColor: [
              'green'
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
