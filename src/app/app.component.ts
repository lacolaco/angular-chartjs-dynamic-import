import { Component, ViewChild, ElementRef } from '@angular/core';
import { normalizeCommonJSImport } from '../utils/normalizeCommonJSImport';

const importChart = normalizeCommonJSImport(
  import(/* webpackChunkName: "chart" */ 'chart.js'),
);

@Component({
  selector: 'app-root',
  template: `
    <div>
      <canvas #chart></canvas>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  @ViewChild('chart') chartElement: ElementRef<HTMLCanvasElement>;

  async ngOnInit() {
    const Chart = await importChart;

    new Chart(this.chartElement.nativeElement, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },

      // Configuration options go here
      options: {},
    });
  }
}
