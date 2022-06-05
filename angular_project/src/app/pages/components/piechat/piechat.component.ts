import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-piechat',
  templateUrl: './piechat.component.html',
  styleUrls: ['./piechat.component.scss']
})
export class PiechatComponent implements OnInit {

  data = [
    {
      "name": "book",
      "series": [
        {
          "name": "january",
          "value": 124
        },
        {
          "name": "february",
          "value": 125
        },
        {
          "name": "march",
          "value": 156
        }
      ]
    },
    {
      "name": "grapic book",
      "series": [
        {
          "name": "january",
          "value": 134
        },
        {
          "name": "february",
          "value": 434
        },
        {
          "name": "march",
          "value": 672
        }
      ]
    },
    {
      "name": "desk",
      "series": [
        {
          "name": "january",
          "value": 89
        },
        {
          "name": "february",
          "value": 563
        },
        {
          "name": "march",
          "value": 883
        }
      ]
    }
  ]
  // Create the data table.

  constructor() { }

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
  drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('divPiechat'));
    chart.draw(data, null);
  }
}
