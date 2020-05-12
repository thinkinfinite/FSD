import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
  aFlag = true;
  createCompanyForm = new FormGroup({
    company: new FormControl(),
    ceo: new FormControl(),
    turnOver: new FormControl(),
    ipoDate: new FormControl(),
    stockCode: new FormControl(),
    sector: new FormControl(),
    desc: new FormControl()
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.router.navigate(['company/manage-company']);
  }
}
