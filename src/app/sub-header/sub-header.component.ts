import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  searchForm = new FormGroup({
    searchText: new FormControl()
  });
  aFlag = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  toImportData() {
  }

  toManageCompany() {
    this.router.navigate(['/company/manage-company']);
    this.aFlag = true;
  }
  toManageExchange() {
  }

  toManageIpo() {
    this.router.navigate(['/admin/ipo-list']);
    this.aFlag = true;
  }
}
