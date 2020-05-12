import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/service/shared.model';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.scss']
})
export class ManageCompanyComponent implements OnInit {

  public companyList: Company[];

  constructor(private router: Router,
              private companyService: CompanyService) { }

  ngOnInit() {
    this.initData();
  }

  private async initData() {
    this.companyList = await this.companyService.getCompanyList();
    console.log('this.seList', this.companyList);
  }

  createCompany() {
    this.router.navigate(['/company/create-company']);
  }
}
