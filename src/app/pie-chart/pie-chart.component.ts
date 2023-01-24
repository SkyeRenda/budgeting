import { Component, ViewChild } from "@angular/core";
import {ApexDataLabels, ChartComponent} from "ng-apexcharts";

import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;

  dataLabels: ApexDataLabels;
};

@Component({
  selector: "app-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"]
})
export class PieChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      chart: {
        width: 380,
        type: "pie"
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Income", "Expenses"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      series: [44, 22]
    };
  }
}
