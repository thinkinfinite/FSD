import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChartDialogComponent } from '../chart-dialog/chart-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-compare-charts',
  templateUrl: './compare-charts.component.html',
  styleUrls: ['./compare-charts.component.scss']
})
export class CompareChartsComponent implements OnInit {
  aFlag = false;
  compareCompanyForm = new FormGroup({
    companySector: new FormControl(),
    stockExchange: new FormControl(),
    companyName: new FormControl(),
    from: new FormControl(),
    to: new FormControl()
  });

  constructor( private dialog: MatDialog ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dialog.open(ChartDialogComponent, {width: '100%', height: 'auto', data: this.compareCompanyForm.value});
  }
}
