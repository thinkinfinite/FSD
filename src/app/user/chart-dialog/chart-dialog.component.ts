import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StockPrice } from 'src/app/service/shared.model';
import { StockService } from '../../service/stock.service';

@Component({
  selector: 'app-chart-dialog',
  templateUrl: './chart-dialog.component.html',
  styleUrls: ['./chart-dialog.component.scss']
})
export class ChartDialogComponent implements OnInit {
  private data: object;
  private stockPriceList: StockPrice[];
  lineChartData: Array<any> = [
    {
      label: '',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
  ];

  lineChartLabels: Array<any>;
  lineChartOptions: any = {
    responsive: true
  };
   lineChartLegend = true;
  lineChartType = 'line';
  inlinePlugin: any;
  textPlugin: any;
  constructor(public dialogRef: MatDialogRef<ChartDialogComponent>,
              private stockService: StockService,
              @Inject(MAT_DIALOG_DATA) public paramData: Array<string>) {
                this.data = paramData;
            }

  ngOnInit() {
    this.initData();
    this.lineChartData[0].label =  '';
    this.lineChartData[0].data = [];
    this.lineChartLabels = [];
  }

  private async initData() {
    const info =  JSON.parse(JSON.stringify(this.data));
    this.stockPriceList = await this.stockService.getStockPriceList(info.companyName, info.stockExchange, info.from, info.to);
    if (this.stockPriceList.length > 0) {
      this.lineChartData[0].label = this.stockPriceList[0].companyCode;
      for (const stockPrice of this.stockPriceList) {
        this.lineChartData[0].data.push(stockPrice.currentPrice);
        this.lineChartLabels.push(stockPrice.date);
      }
    }

    this.textPlugin = [{
      id: 'stockMarket',
      beforeDraw(chart: any): any {
        const width = chart.chart.width;
        const height = chart.chart.height;
        const ctx = chart.chart.ctx;
        ctx.restore();
        const fontSize = (height / 114).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';
        const text = 'Stock Market';
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }];

    this.inlinePlugin = this.textPlugin;
  }

}
