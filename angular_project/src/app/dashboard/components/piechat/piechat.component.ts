import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from '../../dashboard.service';

Chart.register(...registerables);
@Component({
  selector: 'app-piechat',
  templateUrl: './piechat.component.html',
  styleUrls: ['./piechat.component.scss']
})
export class PiechatComponent implements OnInit {

  constructor(private _dashBoard:DashboardService) { }


  ngOnInit(): void {

    this._dashBoard.tokenDataSend.subscribe((res:any)=>{
      console.log(res);
      const myChart = new Chart('tokens', {
        type: 'pie',
        data: {
          labels: [ 'Tokens'],
          datasets: [{
            label: 'Total tokens',
            data: [res.length],
            backgroundColor: [
              'blue'
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
